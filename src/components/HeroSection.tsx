import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";

const HeroSection = () => {
  const features = [
    "Deployment and Support",
    "Flexibility and Adaptability", 
    "Discovery and Analysis",
    "Competitive Advantage"
  ];

  const trustBadges = [
    { name: "Trustpilot", rating: "4.8", reviews: "450+" },
    { name: "Google", rating: "4.9", reviews: "450+" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                ⚡ Everything You Need To Create A Website
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Build, Scale & Transform with{" "}
                <span className="text-white drop-shadow-lg">Arosoft</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                Custom Software | Cloud Solutions | Digital Training | Marketplace for Coders
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-white/80" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant transition-all duration-300 group px-8"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-8 pt-8">
              {trustBadges.map((badge) => (
                <div key={badge.name} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    ))}
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">{badge.name}</div>
                    <div className="text-sm text-white/80">{badge.reviews} reviews</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-sm rounded-full p-4 animate-bounce">
              <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30">
                Solution
              </Badge>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-sm rounded-full p-4 animate-pulse">
              <Badge variant="secondary" className="bg-accent/20 text-white border-accent/30">
                Technology
              </Badge>
            </div>

            {/* Main Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Professional tech expert" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;