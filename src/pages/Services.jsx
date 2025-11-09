import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      title: "Secure Cloud Storage",
      description: "All attendance data is securely stored and backed up in the cloud, accessible only to authorized personnel."
    },
    {
      icon: Clock,
      title: "Real-Time Analytics",
      description: "Get instant insights into attendance trends, late arrivals, and absenteeism with powerful analytics dashboards."
    },
    {
      icon: Eye,
      title: "Surveillance Integration",
      description: "Seamlessly integrates with existing CCTV and surveillance infrastructure for enhanced monitoring."
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Attendance is marked in under a second, even during peak hours."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-surveillance">Our Services</h1>

        {/* Core Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-accent">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <Card key={idx} className="card-surveillance border-accent/30">
                <div className="flex flex-col items-center p-6">
                  <service.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-accent">Technical Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, idx) => (
              <Card key={idx} className="card-surveillance border-accent/30">
                <div className="flex flex-col items-center p-6">
                  <feature.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Experience the Future of Attendance?</h2>
          <p className="text-muted-foreground mb-6">Contact us today to schedule a demo or learn more about how Mark My Face can transform your institution.</p>
          <Button asChild size="lg">
            <Link to="/contact" className="inline-flex items-center space-x-2">
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
