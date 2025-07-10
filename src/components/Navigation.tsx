import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Phone, Mail, HeadphonesIcon, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Successfully signed out");
  };

  const navItems = [
    {
      title: "Solutions",
      items: [
        { name: "Custom Software", href: "/services/custom-software" },
        { name: "Mobile/Web Apps", href: "/services/mobile-web-apps" },
        { name: "IT Consultancy", href: "/services/it-consultancy" },
        { name: "Systems Integration", href: "/services/systems-integration" }
      ]
    },
    {
      title: "Learning",
      items: [
        { name: "Join as Tutor", href: "/learning/join-tutor" },
        { name: "Browse Courses", href: "/learning/courses" },
        { name: "Student Portal", href: "/learning/portal" },
        { name: "Course Pricing", href: "/learning/pricing" }
      ]
    },
    {
      title: "Marketplace",
      items: [
        { name: "PHP Scripts", href: "/marketplace/php" },
        { name: "JavaScript Tools", href: "/marketplace/javascript" },
        { name: "Python & APIs", href: "/marketplace/python" },
        { name: "Upload Code", href: "/marketplace/upload" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Team & Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+256 787-726 388</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@arosoft.io</span>
              </div>
              <div className="flex items-center space-x-2">
                <HeadphonesIcon className="h-4 w-4" />
                <span>24/7 Support</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <User className="h-4 w-4" />
                    <span className="text-muted-foreground">{user.email}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleSignOut}
                    className="flex items-center space-x-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Arosoft
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                    <span>{item.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-0 w-64 bg-background border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <div className="p-4">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Get A Quote
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="py-6">
                  <div className="space-y-6">
                    {navItems.map((item) => (
                      <div key={item.title}>
                        <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                        <div className="space-y-2 pl-4">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button className="w-full bg-gradient-primary">
                      Get A Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;