import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Palette, 
  Smartphone, 
  Code, 
  Database,
  ArrowRight 
} from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      category: "Analytics",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Palette,
      title: "UI/UX Designing", 
      category: "Design",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Smartphone,
      title: "App Development",
      category: "Mobile",
      color: "bg-primary/10",
      iconColor: "text-primary",
      highlighted: true
    },
    {
      icon: Code,
      title: "Web Development",
      category: "Frontend",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Database,
      title: "3D Design Solution",
      category: "3D Modeling",
      color: "bg-orange-100", 
      iconColor: "text-orange-600"
    }
  ];

  const projectDetails = {
    title: "Detailing Of Our Project",
    description: "There are many variations passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour.",
    features: [
      { icon: "💻", title: "Responsive Website", description: "100% Customers Satisfaction" },
      { icon: "📊", title: "Big Data & Analytics", description: "Advanced data processing" }
    ]
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            ← EXAMPLES OF OUR WORK →
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Check Our Latest{" "}
            <span className="text-primary">Portfolios</span>
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {portfolioItems.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-elegant ${
                  item.highlighted ? 'bg-gradient-primary text-white border-primary/20' : 'hover:shadow-lg'
                }`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center ${
                    item.highlighted ? 'bg-white/20' : item.color
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      item.highlighted ? 'text-white' : item.iconColor
                    }`} />
                  </div>
                  
                  <div>
                    <h3 className={`font-bold mb-1 ${
                      item.highlighted ? 'text-white' : 'text-foreground'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${
                      item.highlighted ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {item.category}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Details Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Project development" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-background rounded-full p-4 shadow-glow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              {projectDetails.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              {projectDetails.description}
            </p>

            {/* Features */}
            <div className="space-y-4">
              {projectDetails.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="pt-4">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-primary/20 flex items-center justify-center bg-primary/10">
                  <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;