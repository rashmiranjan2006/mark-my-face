import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Eye, Shield, Users, Zap, ArrowRight, Clock, CheckCircle } from "lucide-react";
import surveillanceBg from "@/assets/surveillance-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Mass Face Detection",
      description: "Efficiently identify multiple faces in large groups, reducing wait times and student stress.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data stays local unless explicitly shared. Privacy-first surveillance technology.",
    },
    {
      icon: Zap,
      title: "Instant Recognition",
      description: "Real-time face detection and attendance marking with 99.9% accuracy.",
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Replace traditional attendance systems with instant, automated recognition.",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "500+", label: "Students Tracked" },
    { value: "50+", label: "Institutions" },
    { value: "24/7", label: "Monitoring" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <main className="flex-1">
        <section className="hero-surveillance relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat grid-overlay"
            style={{ backgroundImage: `url(${surveillanceBg})` }}
          />
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Main Surveillance Message */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Eye className="h-12 w-12 text-accent animate-pulse" />
                  <div className="h-px w-8 bg-accent/50"></div>
                  <span className="text-sm uppercase tracking-wider text-accent font-semibold">
                    SURVEILLANCE SYSTEM
                  </span>
                  <div className="h-px w-8 bg-accent/50"></div>
                  <Eye className="h-12 w-12 text-accent animate-pulse" />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold text-surveillance text-glow font-poppins tracking-tight">
                  You Are Under<br />
                  <span className="text-accent-gold">Surveillance</span>
                </h1>
                
                <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent-gold mx-auto rounded-full"></div>
              </div>

              {/* Compelling Quote */}
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic">
                  "The future of attendance is not about marking a sheet,<br />
                  but about <span className="text-accent">seeing a face</span>."
                </p>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experience the next generation of automated attendance systems powered by 
                  advanced facial recognition technology.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
                <Link to="/signup">
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6 group">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-accent/50 hover:border-accent text-accent hover:bg-accent/10">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
                {stats.map((stat, index) => (
                  <Card key={index} className="card-surveillance p-6 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Advanced Surveillance Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Cutting-edge facial recognition technology designed for educational institutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="card-surveillance p-6 text-center group">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="card-surveillance p-8 md:p-12 text-center">
                <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Trusted by Educational Institutions
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our surveillance-based attendance system is designed with privacy and security 
                  at its core. We understand the importance of protecting student data while 
                  providing accurate, efficient attendance tracking.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link to="/about">
                    <Button variant="surveillance" size="lg">
                      Learn About Our Mission
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="border-accent/50 hover:border-accent text-accent hover:bg-accent/10">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
