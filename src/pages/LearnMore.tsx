import { Eye, Shield, Users, Target, Zap, Brain, Clock, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LearnMore = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduces attendance time from 10-15 minutes to under 30 seconds per class."
    },
    {
      icon: Target,
      title: "99.9% Accuracy",
      description: "Advanced facial recognition ensures precise attendance tracking."
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your facial data stays local and is never shared without consent."
    },
    {
      icon: Users,
      title: "Mass Detection",
      description: "Can simultaneously identify multiple students in large classrooms."
    },
    {
      icon: Brain,
      title: "Smart Learning",
      description: "AI adapts to lighting conditions and improves recognition over time."
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Real-time attendance tracking with immediate confirmation."
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Register Your Face",
      description: "Safe, one-time registration creates your encrypted facial template."
    },
    {
      step: 2,
      title: "Enter Classroom",
      description: "Simply walk into class and position yourself in view of the camera."
    },
    {
      step: 3,
      title: "Automatic Detection",
      description: "Our AI instantly recognizes you and marks your attendance."
    },
    {
      step: 4,
      title: "Confirmation",
      description: "Receive immediate visual/audio confirmation of successful attendance."
    }
  ];

  const features = [
    "Real-time facial recognition",
    "Multi-student simultaneous detection",
    "Offline-capable processing",
    "Integration with existing LMS",
    "Detailed attendance analytics",
    "Mobile device compatibility",
    "Alternative attendance methods",
    "24/7 technical support"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-surveillance py-24 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Eye className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-6xl font-bold text-surveillance">
                Learn More
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how Mark My Face is revolutionizing attendance tracking with cutting-edge AI technology
            </p>
            <Button className="btn-surveillance" size="lg">
              Start Free Trial
            </Button>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Mark My Face?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-surveillance">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <benefit.icon className="h-8 w-8 text-accent" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Complete Feature Set</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Mark My Face offers a comprehensive suite of features designed to make 
                  attendance tracking effortless for both students and educators.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="card-surveillance">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-accent" />
                    <span>Security & Privacy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">End-to-End Encryption</h4>
                    <p className="text-sm text-muted-foreground">
                      All biometric data is encrypted using military-grade AES-256 encryption.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Local Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Facial recognition happens on your device, keeping your data private.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">GDPR Compliant</h4>
                    <p className="text-sm text-muted-foreground">
                      Full compliance with international privacy regulations and standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Minimization</h4>
                    <p className="text-sm text-muted-foreground">
                      We only collect the minimum data necessary for attendance tracking.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 bg-accent/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Powered by Advanced Technology</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our system leverages state-of-the-art machine learning algorithms and computer vision 
              technology to deliver unparalleled accuracy and reliability.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">AI/ML</div>
                <p className="text-sm text-muted-foreground">Machine Learning</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">OpenCV</div>
                <p className="text-sm text-muted-foreground">Computer Vision</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">TensorFlow</div>
                <p className="text-sm text-muted-foreground">Neural Networks</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">WebRTC</div>
                <p className="text-sm text-muted-foreground">Real-time Processing</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students and educators who have already transformed their 
              attendance tracking experience with Mark My Face.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-surveillance" size="lg">
                Sign Up Now
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore;