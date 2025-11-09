import { Accessibility, Eye, Keyboard, Volume2, Monitor, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AccessibilityPage = () => {
  const features = [
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Full keyboard support for all interactive elements with visible focus indicators."
    },
    {
      icon: Eye,
      title: "Screen Reader Support",
      description: "ARIA labels and semantic HTML ensure compatibility with assistive technologies."
    },
    {
      icon: Monitor,
      title: "High Contrast Mode",
      description: "Enhanced color contrast ratios meet WCAG 2.1 AA standards for better visibility."
    },
    {
      icon: Volume2,
      title: "Audio Feedback",
      description: "Optional audio confirmations for attendance marking and system interactions."
    }
  ];

  const alternatives = [
    {
      situation: "Visual Impairments",
      solutions: [
        "Voice-guided attendance with audio prompts",
        "Tactile feedback options where available", 
        "High contrast display modes",
        "Screen reader compatibility"
      ]
    },
    {
      situation: "Motor Impairments",
      solutions: [
        "Extended timeout periods for interactions",
        "Large touch targets and buttons",
        "Voice commands for navigation",
        "Customizable interface layouts"
      ]
    },
    {
      situation: "Cognitive Considerations", 
      solutions: [
        "Simple, clear interface design",
        "Step-by-step guidance",
        "Consistent navigation patterns",
        "Help documentation in plain language"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-surveillance py-24 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Accessibility className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-6xl font-bold text-surveillance">
                Accessibility
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mark My Face is designed to be accessible to all students, regardless of ability.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            
            {/* Commitment Statement */}
            <Card className="card-surveillance mb-12 border-accent/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-accent" />
                  <span>Our Commitment to Accessibility</span>
                </CardTitle>
                <CardDescription>
                  Making attendance tracking inclusive for everyone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  At Mark My Face, we believe that technology should be accessible to all students. We are committed 
                  to ensuring our facial recognition attendance system accommodates users with diverse abilities and 
                  needs. Our system is designed following Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                </p>
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <p className="font-medium text-accent mb-2">Universal Design Principle</p>
                  <p className="text-sm text-muted-foreground">
                    We design for the widest range of users from the start, rather than retrofitting accessibility features.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Built-in Accessibility Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="card-surveillance">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <feature.icon className="h-6 w-6 text-accent" />
                        <span>{feature.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Alternative Methods */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Alternative Attendance Methods</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                We understand that facial recognition may not work for everyone. That's why we provide multiple 
                alternative methods to ensure no student is excluded from attendance tracking.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {alternatives.map((alt, index) => (
                  <Card key={index} className="card-surveillance">
                    <CardHeader>
                      <CardTitle className="text-lg">{alt.situation}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {alt.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <span className="block w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Keyboard Shortcuts */}
            <Card className="card-surveillance mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Keyboard className="h-6 w-6 text-accent" />
                  <span>Keyboard Shortcuts</span>
                </CardTitle>
                <CardDescription>
                  Navigate efficiently using these keyboard combinations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Navigation</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Tab</span>
                        <span className="text-muted-foreground">Navigate forward</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shift + Tab</span>
                        <span className="text-muted-foreground">Navigate backward</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Enter</span>
                        <span className="text-muted-foreground">Activate button/link</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Space</span>
                        <span className="text-muted-foreground">Select checkbox</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Attendance Actions</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Alt + A</span>
                        <span className="text-muted-foreground">Start attendance</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Alt + D</span>
                        <span className="text-muted-foreground">Go to dashboard</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Alt + H</span>
                        <span className="text-muted-foreground">Return to home</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Esc</span>
                        <span className="text-muted-foreground">Close modal/overlay</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Section */}
            <Card className="card-surveillance border-accent/30">
              <CardHeader>
                <CardTitle>Need Accessibility Support?</CardTitle>
                <CardDescription>
                  We're here to help ensure you can use our system effectively
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  If you encounter any accessibility barriers or need assistance setting up alternative 
                  attendance methods, please don't hesitate to reach out to our support team.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Contact Methods</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> accessibility@markmyface.edu</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567 ext. 1</p>
                      <p><strong>Text/TTY:</strong> +1 (555) 123-4568</p>
                      <p><strong>In-Person:</strong> Student Services Office</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Response Times</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> Within 24 hours</p>
                      <p><strong>Phone:</strong> Immediate during business hours</p>
                      <p><strong>Urgent Issues:</strong> Same day response</p>
                      <p><strong>Setup Assistance:</strong> Scheduled within 48 hours</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="btn-surveillance">
                    Request Accessibility Support
                  </Button>
                  <Button variant="outline">
                    Download User Guide (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;