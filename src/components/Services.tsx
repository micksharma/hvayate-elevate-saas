import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Code, Cloud, Zap, Shield, BarChart3 } from "lucide-react";
import featuresBackground from "@/assets/features-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android, like our successful TruxCargo logistics platform.",
      features: ["React Native", "Flutter", "Native iOS/Android"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: ["React/Next.js", "TypeScript", "Modern UI/UX"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for enterprise-grade applications.",
      features: ["AWS/Azure", "Kubernetes", "CI/CD Pipelines"]
    },
    {
      icon: Zap,
      title: "API Development",
      description: "Robust and scalable APIs that power your applications with high performance and reliability.",
      features: ["RESTful APIs", "GraphQL", "Microservices"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security implementations to protect your data and ensure compliance.",
      features: ["Data Encryption", "GDPR Compliance", "Security Audits"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Advanced analytics and reporting solutions to help you make data-driven decisions.",
      features: ["Real-time Analytics", "Custom Dashboards", "Business Intelligence"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${featuresBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive SAAS solutions that drive business growth and digital transformation. 
            From concept to deployment, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-purple transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;