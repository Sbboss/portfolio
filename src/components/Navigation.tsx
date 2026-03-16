import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const HuggingFaceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="currentColor">
    <path d="M37.2 48.8c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3zm45.6 0c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z" />
    <path d="M60 10C32.4 10 10 32.4 10 60s22.4 50 50 50 50-22.4 50-50S87.6 10 60 10zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" />
    <path d="M60 78c-11 0-20.5-6.3-25.2-15.5-.6-1.2.3-2.5 1.6-2.5h47.2c1.3 0 2.2 1.3 1.6 2.5C80.5 71.7 71 78 60 78z" />
  </svg>
);

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
          <div className="text-xl font-bold text-primary">SB</div>

          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`transition-colors text-sm ${
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
              className="transition-colors text-sm text-muted-foreground hover:text-primary font-medium"
            >
              Resume
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/Sbboss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/shivabaghel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://huggingface.co/Sbboss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-muted-foreground hover:text-primary transition-colors"
              aria-label="Hugging Face"
            >
              <HuggingFaceIcon className="h-4 w-4" />
            </a>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

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
              <a
                href="https://drive.google.com/file/d/1MGyuInSA8yVGEp744ItppkFkSksSAtzr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-2 transition-colors rounded-md text-muted-foreground hover:text-primary hover:bg-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
              <div className="flex items-center gap-3 px-4 pt-2 border-t">
                <a href="https://github.com/Sbboss" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://linkedin.com/in/shivabaghel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://huggingface.co/Sbboss" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <HuggingFaceIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
