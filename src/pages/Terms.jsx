import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";
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
                    <FileText className="h-6 w-6 text-accent" />
                    <span>Acceptance of Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    By accessing or using Mark My Face, you agree to be bound by these terms and all applicable laws and regulations.
                  </p>
                </CardContent>
              </Card>

              {/* User Responsibilities */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-accent" />
                    <span>User Responsibilities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Provide accurate and up-to-date information</li>
                    <li>Do not attempt to bypass or tamper with the system</li>
                    <li>Respect the privacy and rights of others</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Prohibited Conduct */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <XCircle className="h-6 w-6 text-accent" />
                    <span>Prohibited Conduct</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>No impersonation or fraudulent activity</li>
                    <li>No unauthorized access or hacking</li>
                    <li>No misuse of facial recognition data</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Changes to Terms */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="h-6 w-6 text-accent" />
                    <span>Changes to Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We may update these terms from time to time. Continued use of the system constitutes acceptance of any changes.
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

export default Terms;
