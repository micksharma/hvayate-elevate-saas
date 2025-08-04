import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Award } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "10L+",
      label: "Total App Downloads"
    },
    {
      icon: Star,
      number: "4.8",
      label: "Average App Rating"
    },
    {
      icon: Award,
      number: "3",
      label: "Major Platforms"
    }
  ];

  const features = [
    "TruxCargo: Revolutionary logistics platform with 50K+ users",
    "Mobile Goo: Device marketplace with 10+ lakh downloads",
    "ServicePlug: Automotive services marketplace platform",
    "Enterprise-grade scalable cloud infrastructure",
    "Multi-platform mobile and web development expertise",
    "24/7 support with 99.9% uptime guarantee"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">hvayate.com</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a leading SAAS company with a proven track record of building platforms that serve millions. 
              Our portfolio includes TruxCargo (logistics), Mobile Goo (device marketplace with 10+ lakh downloads), 
              and ServicePlug (automotive marketplace) - each transforming their respective industries.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                View TruxCargo
              </Button>
            </div>
          </div>

          {/* Right Content - Stats and Success Story */}
          <div className="space-y-8">
            {/* Achievement Cards */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-purple transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <achievement.icon className="text-white" size={20} />
                    </div>
                    <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Success Story Card */}
            <Card className="p-8 bg-gradient-primary text-white shadow-glow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Our Platform Portfolio</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  From TruxCargo's logistics revolution to Mobile Goo's 10+ lakh downloads and ServicePlug's 
                  automotive marketplace - we create platforms that scale and transform entire industries 
                  with cutting-edge technology and user-centric design.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-white/70 text-sm">TruxCargo Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">10L+</div>
                    <div className="text-white/70 text-sm">Mobile Goo DLs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-white/70 text-sm">ServicePlug Partners</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;