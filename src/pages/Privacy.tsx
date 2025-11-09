import { Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
                    <p className="font-medium text-accent mb-2">🔒 Privacy-First Approach</p>
                    <p className="text-sm text-muted-foreground">
                      Your facial data stays in your browser unless explicitly shared. We use client-side processing 
                      whenever possible to minimize data transmission.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Data Collection */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-6 w-6 text-accent" />
                    <span>Information We Collect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Information</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Name and student ID</li>
                      <li>Email address (institutional)</li>
                      <li>Course and semester information</li>
                      <li>Phone number (optional)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Biometric Data</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Facial recognition templates (encrypted)</li>
                      <li>Attendance timestamps</li>
                      <li>Location data (classroom/building)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technical Information</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Device information and browser type</li>
                      <li>IP address and general location</li>
                      <li>Usage analytics and performance data</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Data */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UserCheck className="h-6 w-6 text-accent" />
                    <span>How We Use Your Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="block w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Attendance Tracking:</strong> To accurately record and maintain attendance records</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="block w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Identity Verification:</strong> To ensure the correct student is marked present</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="block w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>System Improvement:</strong> To enhance accuracy and user experience</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="block w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Communication:</strong> To send attendance reports and system updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-6 w-6 text-accent" />
                    <span>Data Security & Protection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Encryption & Storage</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      All biometric data is encrypted using industry-standard AES-256 encryption. Facial recognition 
                      templates are stored as mathematical representations, not actual images.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Access Controls</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Access to personal data is restricted to authorized personnel only and is monitored through 
                      comprehensive audit logs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Data Retention</h4>
                    <p className="text-sm text-muted-foreground">
                      Attendance data is retained for the duration of your academic program plus 2 years for 
                      administrative purposes. Biometric templates are deleted upon graduation or withdrawal.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-accent" />
                    <span>Your Rights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Access & Correction</h4>
                      <p className="text-sm text-muted-foreground">
                        You can request access to your personal data and request corrections to any inaccurate information.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Data Portability</h4>
                      <p className="text-sm text-muted-foreground">
                        You can request a copy of your attendance data in a commonly used format.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Opt-Out</h4>
                      <p className="text-sm text-muted-foreground">
                        You may opt out of facial recognition and use alternative attendance methods.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Data Deletion</h4>
                      <p className="text-sm text-muted-foreground">
                        You can request deletion of your biometric data, subject to academic record requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="card-surveillance border-accent/30">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">Privacy Questions or Concerns?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you have any questions about this Privacy Policy or our data practices, please contact our 
                    Data Protection Officer:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Email:</strong> privacy@markmyface.edu</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567 ext. 2</p>
                    <p><strong>Address:</strong> Privacy Office, 123 Innovation Drive, Tech Campus, TC 12345</p>
                  </div>
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