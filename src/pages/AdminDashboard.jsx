import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera, CheckCircle, XCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast.jsx";
import { supabase } from "@/integrations/supabase/client";
import FaceRecognitionCamera from "@/components/FaceRecognitionCamera";

const AdminDashboard = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const { toast } = useToast();
  const [students, setStudents] = useState([]);

  // Load students from database
  useEffect(() => {
    const loadStudents = async () => {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error loading students:', error);
        return;
      }

      if (data) {
        setStudents(data.map(s => ({
          id: s.id,
          name: s.name,
          rollNo: s.roll_no,
          photo: s.photo_url,
          isPresent: false,
        })));
      }
    };

    loadStudents();
  }, []);

  const handleCameraCapture = async (imageData) => {
    setShowCamera(false);
    setIsProcessing(true);

    try {
      // Simulate face recognition processing (2 seconds)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mark students as present (simulated - in production, use real face matching)
      const updatedStudents = students.map((student) => ({
        ...student,
        isPresent: Math.random() > 0.3, // 70% chance for demo
      }));

      setStudents(updatedStudents);

      // Save attendance to database
      const presentStudents = updatedStudents.filter(s => s.isPresent);
      const attendanceRecords = presentStudents.map(s => ({
        student_id: s.id,
      }));

      if (attendanceRecords.length > 0) {
        const { error } = await supabase
          .from('attendance')
          .insert(attendanceRecords);

        if (error) throw error;
      }

      setAttendanceMarked(true);

      toast({
        title: "Attendance Marked",
        description: `${presentStudents.length} out of ${students.length} students marked present`,
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to mark attendance",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const resetAttendance = () => {
    setStudents(students.map((s) => ({ ...s, isPresent: false })));
    setAttendanceMarked(false);
  };

  const presentCount = students.filter((s) => s.isPresent).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Admin Dashboard - Face Recognition Attendance
            </h1>
            <p className="text-muted-foreground">
              Upload a class photo to automatically mark attendance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Camera Section */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="card-surveillance p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Camera className="w-5 h-5 text-accent mr-2" />
                  Face Recognition Attendance
                </h3>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Camera className="w-16 h-16 mx-auto text-accent mb-4" />
                    <p className="text-foreground font-medium mb-2">
                      Use Face Recognition
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Open camera to detect and mark attendance automatically
                    </p>
                  </div>

                  <Button
                    onClick={() => setShowCamera(true)}
                    disabled={isProcessing}
                    className="w-full btn-surveillance"
                    size="lg"
                  >
                    {isProcessing ? "Processing..." : "Open Camera"}
                  </Button>

                  {attendanceMarked && (
                    <Button
                      onClick={resetAttendance}
                      variant="outline"
                      className="w-full"
                    >
                      Reset Attendance
                    </Button>
                  )}
                </div>
              </Card>

              {/* Stats */}
              <Card className="card-surveillance p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Users className="w-5 h-5 text-accent mr-2" />
                  Attendance Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Students</span>
                    <span className="font-bold text-foreground">
                      {students.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Present</span>
                    <span className="font-bold text-accent">{presentCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Absent</span>
                    <span className="font-bold text-destructive">
                      {absentCount}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-muted-foreground">Attendance Rate</span>
                    <span className="font-bold text-accent">
                      {students.length > 0
                        ? Math.round((presentCount / students.length) * 100)
                        : 0}
                      %
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Students List */}
            <div className="lg:col-span-2">
              <Card className="card-surveillance p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Student Attendance Records
                </h3>

                <div className="space-y-3">
                  {students.map((student) => (
                    <div
                      key={student.id}
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        student.isPresent
                          ? "bg-accent/10 border-accent/30"
                          : "bg-muted/30 border-border"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={student.photo}
                            alt={student.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          {attendanceMarked && (
                            <div
                              className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
                                student.isPresent
                                  ? "bg-accent"
                                  : "bg-destructive"
                              }`}
                            >
                              {student.isPresent ? (
                                <CheckCircle className="w-3 h-3 text-background" />
                              ) : (
                                <XCircle className="w-3 h-3 text-background" />
                              )}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {student.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {student.rollNo}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        {attendanceMarked && (
                          <span
                            className={`text-sm font-medium ${
                              student.isPresent ? "text-accent" : "text-destructive"
                            }`}
                          >
                            {student.isPresent ? "Present" : "Absent"}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {showCamera && (
        <FaceRecognitionCamera
          onCapture={handleCameraCapture}
          onClose={() => setShowCamera(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
