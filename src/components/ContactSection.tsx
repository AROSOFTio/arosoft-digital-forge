import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Contact Card */}
        <Card className="bg-gradient-primary text-white overflow-hidden rounded-3xl shadow-glow">
          <CardContent className="p-16 relative">
            {/* Background Illustration */}
            <div className="absolute left-16 top-1/2 transform -translate-y-1/2">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white/20 rounded-full px-3 py-1 text-sm">
                24/7
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 lg:pl-32">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                  ← CONTACT US →
                </Badge>
                
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  24/7 Expert Hosting Support Our
                  <br />
                  <span className="text-white drop-shadow-lg">Customers Love</span>
                </h2>
              </div>

              {/* Right Content - CTA */}
              <div className="flex justify-center lg:justify-end">
                <Button 
                  size="lg"
                  className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-4 group"
                >
                  TALK TO A SPECIALIST
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-1/3 w-12 h-12 bg-white/5 rounded-full animate-bounce"></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;