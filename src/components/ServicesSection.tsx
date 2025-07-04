import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Settings, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Data Guard Sentinel",
      description: "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
      features: ["24/7 Monitoring", "Advanced Security", "Data Analytics"],
      highlighted: false
    },
    {
      icon: Code2,
      title: "Custom Development",
      description: "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
      features: ["Full Stack Development", "API Integration", "Cloud Solutions"],
      highlighted: true
    },
    {
      icon: Settings,
      title: "CRM Solutions",
      description: "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
      features: ["Customer Management", "Sales Automation", "Analytics Dashboard"],
      highlighted: false
    },
    {
      icon: Smartphone,
      title: "Web Design",
      description: "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
      features: ["Responsive Design", "UX/UI Optimization", "Mobile First"],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            ← OUR SERVICES →
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Elevating Businesses With IT
            <br />
            <span className="text-primary">Ingenuity</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-elegant ${
                  service.highlighted 
                    ? 'bg-gradient-primary text-white border-primary/20' 
                    : 'hover:shadow-lg'
                }`}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    service.highlighted 
                      ? 'bg-white/20' 
                      : 'bg-primary/10'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      service.highlighted ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  
                  <CardTitle className={`text-xl font-bold ${
                    service.highlighted ? 'text-white' : 'text-foreground'
                  }`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className={`text-sm leading-relaxed ${
                    service.highlighted 
                      ? 'text-white/90' 
                      : 'text-muted-foreground'
                  }`}>
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${
                          service.highlighted ? 'text-white/80' : 'text-primary'
                        }`} />
                        <span className={`text-sm ${
                          service.highlighted 
                            ? 'text-white/90' 
                            : 'text-muted-foreground'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={service.highlighted ? "secondary" : "ghost"}
                    className={`w-full group/btn transition-all duration-300 ${
                      service.highlighted 
                        ? 'bg-white text-primary hover:bg-white/90' 
                        : 'hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
                
                {/* Animated Background Elements */}
                {service.highlighted && (
                  <div className="absolute top-4 right-4 opacity-20">
                    <div className="w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowRight className="h-4 w-4 rotate-180" />
            </Button>
            <Button size="icon" className="rounded-full bg-gradient-primary">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;