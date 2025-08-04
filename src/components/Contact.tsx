import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@hvayate.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+91 9876543210"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      contact: "Mumbai, India"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Something <span className="text-primary-glow">Amazing</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge SAAS solutions? 
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Whether you need a mobile app like TruxCargo, a web platform, or enterprise SAAS solutions, 
                we're here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-white/70 text-sm mb-1">{info.description}</p>
                    <p className="text-white">{info.contact}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA for existing projects */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">TruxCargo Success</CardTitle>
                <CardDescription className="text-white/70">
                  See how we transformed logistics management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Start Your Project</CardTitle>
              <CardDescription className="text-white/70">
                Tell us about your requirements and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
              <Input 
                placeholder="Email Address" 
                type="email"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
              />
              <Input 
                placeholder="Phone Number" 
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
              />
              <Input 
                placeholder="Project Type (Mobile App, Web Platform, etc.)" 
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
              />
              <Textarea 
                placeholder="Tell us about your project requirements..."
                rows={4}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
              />
              <Button variant="hero" size="lg" className="w-full group">
                Send Message
                <Send className="group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;