import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Floyd Miles",
      role: "Head Assistant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Wade Warren", 
      role: "Medical Assistant",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c943?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Masirul Islam",
      role: "Manager Assistant", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Jenny Wilson",
      role: "Web Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            ← OUR EXPERT →
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            See Our Skilled{" "}
            <span className="text-primary">Expert Team</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-primary"
            >
              <CardContent className="p-0">
                {/* Member Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                
                {/* Member Info */}
                <div className="p-6 text-center text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {member.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;