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
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="First Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="How can we help you?" rows={4} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="subscribe" name="subscribe" />
                      <Label htmlFor="subscribe">Subscribe to updates</Label>
                    </div>
                    <Button type="submit" className="inline-flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <Card className="card-surveillance border-accent/30">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-accent" />
                      <span>Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">support@markmyface.edu</p>
                  </CardContent>
                </Card>
                <Card className="card-surveillance border-accent/30">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-accent" />
                      <span>Phone</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+1-800-HELP-NOW</p>
                  </CardContent>
                </Card>
                <Card className="card-surveillance border-accent/30">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span>Address</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">123 Surveillance Ave, City, Country</p>
                  </CardContent>
                </Card>
                <Card className="card-surveillance border-accent/30">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span>Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Mon-Fri: 9am - 6pm</p>
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
// ...existing code up to the first export default Contact;
// Remove all code after the first export default Contact;
