import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  
  const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Publications", href: "/publications" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-between h-16">
  {/* Left: Logo */}
  <div className="text-xl font-bold text-primary">SB</div>

  {/* Center: Navigation Items */}
  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8">
    {navItems.map((item) => (
      <Link
        key={item.label}
        to={item.href}
        className={`transition-colors ${
          location.pathname === item.href 
            ? "text-primary font-medium" 
            : "text-muted-foreground hover:text-primary"
        }`}
      >
        {item.label}
      </Link>
    ))}
      <a
        href="https://drive.google.com/file/d/1MGyuInSA8yVGEp744ItppkFkSksSAtzr/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors text-muted-foreground hover:text-primary font-medium"
      >
        Resume
      </a>
    
  </div>

  {/* Right: Mobile Menu Toggle */}
  <Button
    variant="ghost"
    size="sm"
    className="md:hidden"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
  </Button>
</div>


        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block w-full text-left px-4 py-2 transition-colors rounded-md ${
                    location.pathname === item.href 
                      ? "text-primary font-medium bg-secondary" 
                      : "text-muted-foreground hover:text-primary hover:bg-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;