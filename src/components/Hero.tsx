import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      <div className="absolute top-20 left-10 opacity-10">
        <Package size={120} className="text-white" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Truck size={100} className="text-white" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                Leading SAAS Solutions Provider
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate Your
              <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                {" "}Business
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
              Transform your logistics and business operations with our cutting-edge SAAS solutions. 
              From mobile apps to enterprise platforms, we deliver excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                View Our Work
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-white/70">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-white/70">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-white/70">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Logistics and Technology Solutions" 
                className="w-full h-auto rounded-2xl shadow-glow"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 z-20">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Smartphone className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;