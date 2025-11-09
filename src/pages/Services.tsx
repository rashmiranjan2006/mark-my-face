import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Users, 
  Shield, 
  Zap, 
  Eye, 
  Monitor, 
  Database, 
  Brain, 
  Clock,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const coreServices = [
    {
      icon: Users,
      title: "Automated Face Detection in Mass",
      description: "Efficiently identify and track multiple faces simultaneously in large groups, reducing wait times and eliminating bottlenecks during attendance marking.",
      features: [
        "Real-time multi-face recognition",
        "Handles groups of 50+ students",
        "99.9% accuracy rate",
        "Instant attendance marking"
      ]
    },
    {
      icon: Monitor,
      title: "Student Dashboard",
      description: "Comprehensive personal dashboard for students to track their attendance, view analytics, and manage their academic records seamlessly.",
      features: [
        "Personalized attendance tracking",
        "Subject-wise analytics",
        "Real-time notifications",
        "Academic performance insights"
      ]
    },
    {
      icon: Shield,
      title: "Privacy-First Architecture",
      description: "Built with privacy and security at its core, ensuring student data protection while maintaining system efficiency and accuracy.",
      features: [
        "Local data processing",
        "Encrypted face templates",
        "GDPR compliant",
        "No unauthorized data sharing"
      ]
    }
  ];

  const technicalFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Recognition",
      description: "Advanced machine learning algorithms ensure accurate face detection even with masks, lighting changes, and aging."
    },
    {
      icon: Database,
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales effortlessly from small classrooms to large university campuses."
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Process attendance for entire lecture halls in under 30 seconds with our optimized detection algorithms."
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous system monitoring and maintenance ensure 99.9% uptime for critical attendance periods."
    }
  ];

  const useCases = [
    {
      title: "Large Lecture Halls",
      description: "Handle 200+ student lectures with instant attendance marking",
      impact: "95% time saved"
    },
    {
      title: "Exam Attendance",
      description: "Secure and accurate attendance verification for examinations",
      impact: "100% accuracy"
    },
    {
      title: "Lab Sessions",
      description: "Track practical session attendance with specialized equipment detection",
      impact: "Enhanced security"
    },
    {
      title: "Campus Events",
      description: "Monitor attendance for seminars, workshops, and special events",
      impact: "Streamlined check-in"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-surveillance">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-accent" />
                <span className="text-sm uppercase tracking-wider text-accent font-semibold">
                  SURVEILLANCE SERVICES
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-surveillance font-poppins mb-6">
                Advanced Surveillance<br />
                <span className="text-accent-gold">Technology Solutions</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Comprehensive facial recognition and attendance management services designed 
                for modern educational institutions seeking efficiency, security, and accuracy.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
                <Link to="/signup">
                  <Button variant="hero" size="lg" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-accent/50 hover:border-accent text-accent hover:bg-accent/10">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Core Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive surveillance solutions tailored for educational environments
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="card-surveillance p-8 group">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Technical Excellence</h2>
              <p className="text-lg text-muted-foreground">
                Cutting-edge technology stack powering our surveillance systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalFeatures.map((feature, index) => {
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

        {/* Use Cases */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Real-World Applications</h2>
              <p className="text-lg text-muted-foreground">
                Proven solutions across diverse educational scenarios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="card-surveillance p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {useCase.title}
                    </h3>
                    <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {useCase.impact}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="card-surveillance p-8 md:p-12 text-center">
                <Eye className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Implement Surveillance?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join leading educational institutions that have transformed their attendance 
                  systems with our advanced surveillance technology. Experience the future of 
                  automated attendance management.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link to="/signup">
                    <Button variant="surveillance" size="lg" className="text-lg px-8">
                      Start Your Implementation
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="text-lg px-8 border-accent/50 hover:border-accent text-accent hover:bg-accent/10">
                      Schedule Consultation
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

export default Services;