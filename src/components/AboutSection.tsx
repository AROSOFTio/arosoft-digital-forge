import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { number: "20.5k", label: "Projects Done" },
    { number: "100.5k", label: "Happy Clients" },
    { number: "150.5k", label: "Team Members" }
  ];

  const features = [
    {
      icon: "🔧",
      title: "Back-End Development",
      description: "Robust server-side solutions"
    },
    {
      icon: "🎨", 
      title: "Product Design",
      description: "Beautiful and functional interfaces"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-glow max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Team Collaboration</h4>
                    <p className="text-sm text-muted-foreground">Working together efficiently</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-accent/10 rounded-full animate-bounce"></div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                ← ABOUT COMPANY →
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Building Smarter Digital Solutions<br />
            <span className="text-white drop-shadow-lg">For a Connected Future</span>
          </h2>

          <p className="text-lg text-white/90 leading-relaxed">
            At AROSOFT, we craft scalable software and seamless user experiences that drive innovation. 
            From backend systems to beautiful frontends, we help brands move fast, stay secure, and grow with confidence.
          </p>


            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-sm text-white/80">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;