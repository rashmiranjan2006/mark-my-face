import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


import { Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-surveillance py-24 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Shield className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-6xl font-bold text-surveillance">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we protect and handle your data.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              {/* Last Updated */}
              <Card className="card-surveillance border-accent/30">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </CardContent>
              </Card>

              {/* Overview */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="h-6 w-6 text-accent" />
                    <span>Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Mark My Face is committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, and safeguard your data when you use our facial recognition 
                    attendance system.
                  </p>
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                    <p className="font-medium text-accent mb-2">12 Privacy-First Approach</p>
                    <p className="text-sm text-muted-foreground">
                      We process all facial data locally and never share your biometric information with third parties. All data is encrypted and stored securely.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Data Collection */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-6 w-6 text-accent" />
                    <span>Data Collection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Facial recognition templates (encrypted)</li>
                    <li>Attendance records</li>
                    <li>Basic student information (name, ID, email)</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Usage */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UserCheck className="h-6 w-6 text-accent" />
                    <span>How We Use Your Data</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Marking attendance automatically</li>
                    <li>Generating analytics and reports</li>
                    <li>Improving system accuracy and security</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-6 w-6 text-accent" />
                    <span>Data Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We use industry-standard encryption and security protocols to protect your data from unauthorized access.
                  </p>
                </CardContent>
              </Card>

              {/* Policy Access */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-accent" />
                    <span>Accessing & Updating Your Data</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    You can request access to your data or ask for corrections by contacting our support team.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
