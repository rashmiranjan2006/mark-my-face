import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Emergency Resources Section */}
        <section className="bg-destructive/10 border-b border-destructive/20 py-4 px-4">
          <div className="container mx-auto">
            <Alert>
              <Phone className="h-4 w-4" />
              <AlertDescription className="font-medium">
                <strong>Emergency Support:</strong> Call +1-800-HELP-NOW (24/7) or email emergency@markmyface.edu
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Hero Section */}
        <section className="hero-surveillance py-24 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-surveillance mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions, feedback, or need support? We're here to help you.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <Card className="card-surveillance">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="h-6 w-6 text-accent" />
                      <span>Send us a Message</span>
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name (Optional)</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email (Optional)</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Required)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what's on your mind..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="follow-up" />
                      <Label htmlFor="follow-up">
                        Allow follow-up communication regarding this message
                      </Label>
                    </div>

                    <Button className="btn-surveillance w-full" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="card-surveillance">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      Reach out to us through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">support@markmyface.edu</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Office Address</p>
                        <p className="text-sm text-muted-foreground">
                          123 Innovation Drive<br />
                          Tech Campus, TC 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Support Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Mon-Fri: 9:00 AM - 6:00 PM<br />
                          Weekend: Emergency only
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-surveillance">
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium text-sm">How secure is my facial data?</p>
                      <p className="text-sm text-muted-foreground">
                        Your facial data stays in your browser unless explicitly shared. We prioritize privacy and security.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">What if the system doesn't recognize me?</p>
                      <p className="text-sm text-muted-foreground">
                        Contact your instructor immediately. We have backup attendance methods for such cases.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Can I use this system on mobile devices?</p>
                      <p className="text-sm text-muted-foreground">
                        Yes! Our system is fully responsive and works on all modern devices with cameras.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;