import { Eye, Shield, Users, Target, Heart, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy-Driven Design",
      description: "Our system handles face detection in mass to reduce student stress and wait times."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays in the browser unless explicitly shared. We prioritize your privacy."
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined attendance process that saves time for both students and educators."
    },
    {
      icon: Users,
      title: "Inclusive",
      description: "Designed to work for all students, ensuring fair and accurate attendance tracking."
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
              <Eye className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-6xl font-bold text-surveillance">
                About Mark My Face
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionizing attendance tracking through advanced facial recognition technology
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create an innovative, privacy-focused attendance system that eliminates the traditional 
                hassles of roll calls while ensuring accurate tracking through cutting-edge facial recognition 
                technology. We believe the future of attendance is not about marking a sheet, but about seeing a face.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why It Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">85%</div>
                  <p className="text-muted-foreground">Reduction in attendance time</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                  <p className="text-muted-foreground">Accuracy rate</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                  <p className="text-muted-foreground">Students served daily</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="card-surveillance">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <value.icon className="h-8 w-8 text-accent" />
                      <CardTitle>{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-accent/5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already made the switch to smart attendance tracking.
            </p>
            <Button className="btn-surveillance" size="lg">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
