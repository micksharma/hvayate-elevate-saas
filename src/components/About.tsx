import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Award } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "50K+",
      label: "Active Users on TruxCargo"
    },
    {
      icon: Star,
      number: "4.8",
      label: "App Store Rating"
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience"
    }
  ];

  const features = [
    "Proven track record with TruxCargo logistics platform",
    "Expertise in mobile and web application development",
    "End-to-end SAAS solution development",
    "Scalable cloud infrastructure implementation",
    "24/7 support and maintenance",
    "Agile development methodology"
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
              We are a leading SAAS company specializing in logistics and business automation solutions. 
              Our flagship product, TruxCargo, has revolutionized the logistics industry with its 
              innovative approach to courier management and cost optimization.
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
                <h3 className="text-2xl font-bold mb-4">Success Story: TruxCargo</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Our logistics platform TruxCargo has transformed how businesses manage their shipping operations. 
                  With features like multi-courier comparison, real-time tracking, and integrated payment solutions, 
                  it has become the go-to platform for efficient logistics management.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">22+</div>
                    <div className="text-white/70">Courier Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-white/70">Delivery Success</div>
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