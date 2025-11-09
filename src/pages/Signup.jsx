import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, UserPlus, Mail, Lock, User, Phone, GraduationCap, ArrowRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photo) {
      toast({
        title: "Photo Required",
        description: "Please upload your photo for face recognition",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    try {
      const formData = new FormData(e.target);
      const firstName = formData.get('firstName');
      const lastName = formData.get('lastName');
      const studentId = formData.get('studentId');
      const email = formData.get('email');
      const phone = formData.get('phone');
      // Upload photo (stubbed)
      // ...
      toast({
        title: "Signup Successful",
        description: `Welcome, ${firstName}!`,
      });
      navigate("/dashboard");
    } catch (err) {
      toast({
        title: "Signup Failed",
        description: err.message || "An error occurred during signup.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          <Card className="card-surveillance">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <UserPlus className="h-8 w-8 text-accent" />
                <h1 className="text-2xl font-bold text-surveillance">Sign Up</h1>
              </div>
              <CardTitle className="text-xl">Create Your Account</CardTitle>
              <CardDescription>
                Register to use the Mark My Face attendance system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input id="studentId" name="studentId" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword(v => !v)}
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowConfirmPassword(v => !v)}
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo">Photo (for face recognition)</Label>
                  <div className="flex items-center space-x-4">
                    <Input
                      id="photo"
                      name="photo"
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handlePhotoChange}
                    />
                    {photoPreview && (
                      <img src={photoPreview} alt="Preview" className="h-16 w-16 rounded-full object-cover border" />
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" name="terms" required />
                  <Label htmlFor="terms">
                    I agree to the <Link to="/terms" className="text-accent underline">Terms of Use</Link>
                  </Label>
                </div>
                <Button type="submit" className="w-full inline-flex items-center space-x-2" disabled={isLoading}>
                  <UserPlus className="h-4 w-4" />
                  <span>{isLoading ? "Signing Up..." : "Sign Up"}</span>
                </Button>
              </form>
              <div className="text-center mt-4">
                <span className="text-sm text-muted-foreground">Already have an account?</span>
                <Link to="/login" className="ml-2 text-accent font-medium inline-flex items-center">
                  Login <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
