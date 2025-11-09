import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Calendar, Users, Headphones } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GetInTouch = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      details: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Support", 
      description: "Get detailed help via email",
      details: "support@markmyface.edu",
      availability: "24/7 - Response within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging with our team",
      details: "Available on website",
      availability: "Mon-Fri 8AM-8PM EST"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a personalized demo or consultation",
      details: "30-60 minute sessions",
      availability: "Flexible scheduling available"
    }
  ];

  const departments = [
    {
      icon: Headphones,
      name: "Technical Support",
      email: "tech@markmyface.edu",
      description: "System issues, bugs, and technical questions"
    },
    {
      icon: Users,
      name: "Sales & Demos",
      email: "sales@markmyface.edu", 
      description: "Product demonstrations and pricing"
    },
    {
      icon: MessageCircle,
      name: "General Inquiries",
      email: "info@markmyface.edu",
      description: "General questions and information"
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
              <MessageCircle className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-6xl font-bold text-surveillance">
                Get In Touch
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help you succeed with Mark My Face. Reach out through any channel that works best for you.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Choose How You'd Like to Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-surveillance text-center">
                  <CardHeader>
                    <method.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-medium text-accent">{method.details}</p>
                    <p className="text-xs text-muted-foreground">{method.availability}</p>
                    <Button className="btn-surveillance w-full mt-4" size="sm">
                      Contact Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Form */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-6 w-6 text-accent" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                  <CardDescription>
                    Fill out this form and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="educator">Educator</SelectItem>
                        <SelectItem value="administrator">Administrator</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department/Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="sales">Sales & Demos</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="billing">Billing</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your question or request..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Priority Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General inquiry</SelectItem>
                        <SelectItem value="medium">Medium - Need assistance soon</SelectItem>
                        <SelectItem value="high">High - Urgent issue</SelectItem>
                        <SelectItem value="critical">Critical - System down</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="btn-surveillance w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information & Departments */}
              <div className="space-y-8">
                {/* Office Information */}
                <Card className="card-surveillance">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-6 w-6 text-accent" />
                      <span>Visit Our Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Main Office</h4>
                      <p className="text-sm text-muted-foreground">
                        123 Innovation Drive<br />
                        Tech Campus, TC 12345<br />
                        United States
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-sm font-medium">Office Hours</p>
                        <p className="text-xs text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                          Saturday: 10:00 AM - 2:00 PM EST<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Department Contacts */}
                <Card className="card-surveillance">
                  <CardHeader>
                    <CardTitle>Department Contacts</CardTitle>
                    <CardDescription>
                      Reach out to the right team for faster assistance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {departments.map((dept, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                        <dept.icon className="h-5 w-5 text-accent mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{dept.name}</h4>
                          <p className="text-xs text-muted-foreground mb-1">{dept.description}</p>
                          <p className="text-xs text-accent font-medium">{dept.email}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Response Promise */}
                <Card className="card-surveillance border-accent/30">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                      <p className="text-sm text-muted-foreground">
                        We respond to all inquiries within 2 hours during business hours 
                        and within 24 hours on weekends.
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

export default GetInTouch;