import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-surveillance py-24 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Scale className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-6xl font-bold text-surveillance">
                Terms of Use
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using Mark My Face attendance system.
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
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Effective Date:</strong> September 1, 2024
                  </p>
                </CardContent>
              </Card>

              {/* Important Notice */}
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> By using Mark My Face, you agree to these terms. If you do not agree, 
                  please discontinue use and contact your instructor for alternative attendance methods.
                </AlertDescription>
              </Alert>

              {/* Acceptance of Terms */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-accent" />
                    <span>Acceptance of Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Use ("Terms") govern your use of the Mark My Face facial recognition attendance 
                    system ("Service") provided by your educational institution. By accessing or using our Service, 
                    you agree to be bound by these Terms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If you are using this Service as a student, you represent that you are at least 18 years old 
                    or have obtained parental consent if you are a minor.
                  </p>
                </CardContent>
              </Card>

              {/* Permitted Use */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Permitted Use</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold">You may use this Service to:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Record your attendance for authorized classes and events</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>View your own attendance records and history</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Update your profile information as needed</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Access the Service from authorized devices and locations</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Prohibited Use */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <XCircle className="h-6 w-6 text-destructive" />
                    <span>Prohibited Use</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold">You may NOT use this Service to:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Attempt to record attendance for other students (impersonation)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Circumvent, disable, or interfere with security features</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Use photos, videos, or other methods to deceive the facial recognition</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Access or attempt to access other users' data or accounts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>Use the Service for any illegal or unauthorized purpose</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Integrity */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-accent" />
                    <span>Academic Integrity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The Mark My Face system is designed to ensure honest and accurate attendance tracking. 
                    Any attempt to manipulate or circumvent the system constitutes a violation of academic integrity.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                    <h4 className="font-semibold text-destructive mb-2">Consequences of Violations</h4>
                    <p className="text-sm text-muted-foreground">
                      Violations may result in disciplinary action including failing grades, suspension, 
                      or expulsion according to your institution's academic integrity policy.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Data and Privacy */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="h-6 w-6 text-accent" />
                    <span>Data and Privacy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    By using this Service, you consent to the collection and processing of your biometric data 
                    (facial recognition templates) and attendance information as described in our Privacy Policy.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Your Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Keep your login credentials secure</li>
                        <li>Report suspected unauthorized access</li>
                        <li>Provide accurate personal information</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Commitments</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Secure storage of your data</li>
                        <li>Limited use for attendance purposes</li>
                        <li>Compliance with privacy regulations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive for 100% accuracy, the Mark My Face system is a technological tool that may 
                    occasionally experience errors or downtime. Your institution maintains backup attendance 
                    methods for such situations.
                  </p>
                  <div className="bg-muted/30 border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">System Limitations</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Technical malfunctions or server downtime</li>
                      <li>Poor lighting or camera quality affecting recognition</li>
                      <li>Network connectivity issues</li>
                      <li>Force majeure events beyond our control</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="card-surveillance border-accent/30">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">Questions About These Terms?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you have questions about these Terms of Use, please contact:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Email:</strong> legal@markmyface.edu</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567 ext. 3</p>
                    <p><strong>Address:</strong> Legal Department, 123 Innovation Drive, Tech Campus, TC 12345</p>
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

export default Terms;