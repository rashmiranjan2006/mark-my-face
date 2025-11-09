import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast.jsx";
import { pipeline, env } from "@huggingface/transformers";

// Configure transformers
env.allowLocalModels = false;
env.useBrowserCache = true;

const FaceRecognitionCamera = ({ onCapture, onClose }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [detector, setDetector] = useState(null);
  const { toast } = useToast();
  const animationFrameRef = useRef();

  useEffect(() => {
    // Initialize face detection model
    const initDetector = async () => {
      try {
        const det = await pipeline(
          "object-detection",
          "Xenova/detr-resnet-50",
          { device: "webgpu" }
        );
        setDetector(det);
      } catch (error) {
        console.error("Error loading detector:", error);
        toast({
          title: "Model Loading Failed",
          description: "Using camera without face detection",
          variant: "destructive",
        });
      }
    };

    initDetector();
  }, []);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: "user",
            width: { ideal: 1280 },
            height: { ideal: 720 }
          },
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
        toast({
          title: "Camera Access Denied",
          description: "Please allow camera access to continue",
          variant: "destructive",
        });
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current || !canvasRef.current || !detector) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const detectFaces = async () => {
      if (!ctx || !video.videoWidth) {
        animationFrameRef.current = requestAnimationFrame(detectFaces);
        return;
      }

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0);

      try {
        // Detect faces
        const results = await detector(canvas);
        
        // Draw boxes around detected faces (person objects)
        const faces = results.filter((r) => r.label === "person" && r.score > 0.5);
        
        faces.forEach((face) => {
          const { xmin, ymin, xmax, ymax } = face.box;
          
          // Draw green box
          ctx.strokeStyle = "#10b981";
          ctx.lineWidth = 3;
          ctx.strokeRect(xmin, ymin, xmax - xmin, ymax - ymin);
          
          // Draw label background
          ctx.fillStyle = "#10b981";
          ctx.fillRect(xmin, ymin - 25, 100, 25);
          
          // Draw label text
          ctx.fillStyle = "#ffffff";
          ctx.font = "16px Arial";
          ctx.fillText("Face Detected", xmin + 5, ymin - 7);
        });
      } catch (error) {
        console.error("Detection error:", error);
      }

      animationFrameRef.current = requestAnimationFrame(detectFaces);
    };

    video.addEventListener("loadeddata", () => {
      detectFaces();
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [detector]);

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    setIsProcessing(true);

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    const imageData = canvas.toDataURL("image/jpeg", 0.9);
    onCapture(imageData);

    setIsProcessing(false);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-4">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        >
          <X className="w-6 h-6" />
        </Button>

        <div className="relative bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-auto"
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <Button
            onClick={captureImage}
            disabled={isProcessing}
            className="btn-surveillance"
            size="lg"
          >
            <Camera className="w-5 h-5 mr-2" />
            {isProcessing ? "Processing..." : "Capture & Mark Attendance"}
          </Button>
        </div>

        <p className="text-white text-center mt-4 text-sm">
          Position your face in the camera. Green boxes will appear around detected faces.
        </p>
      </div>
    </div>
  );
};

export default FaceRecognitionCamera;