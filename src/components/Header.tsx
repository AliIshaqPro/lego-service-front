
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Home, Code, Layers, Info, Mail, LogIn, ChevronDown } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/95 backdrop-blur-lg shadow-md border-b border-border/30"
          : "py-5 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 relative z-10 group">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300 group-hover:shadow-primary/30 group-hover:scale-110">
            D
            <div className="absolute inset-0 rounded-md border border-white/20 animate-pulse opacity-50"></div>
          </div>
          <span className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">DigitalBuild</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-8 px-4 py-2 rounded-full bg-background/50 backdrop-blur-md shadow-sm border border-border/50">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors relative group"
          >
            <Home className="w-4 h-4" /> Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
              <Code className="w-4 h-4" /> Services <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border border-border/40 shadow-xl rounded-xl p-2 min-w-[220px]">
              <DropdownMenuItem className="rounded-lg hover:bg-primary/10 cursor-pointer">
                <Link to="/services" className="flex items-center gap-2 w-full py-1">
                  Web Development
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-lg hover:bg-primary/10 cursor-pointer">
                <Link to="/services" className="flex items-center gap-2 w-full py-1">
                  Digital Marketing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-lg hover:bg-primary/10 cursor-pointer">
                <Link to="/services" className="flex items-center gap-2 w-full py-1">
                  SEO Optimization
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-lg hover:bg-primary/10 cursor-pointer">
                <Link to="/services" className="flex items-center gap-2 w-full py-1">
                  View All Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link
            to="/builder"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors relative group"
          >
            <Layers className="w-4 h-4" /> Service Builder
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link
            to="/about"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors relative group"
          >
            <Info className="w-4 h-4" /> About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link
            to="/contact"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors relative group"
          >
            <Mail className="w-4 h-4" /> Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" size="sm" className="flex items-center gap-2 border-border/60 hover:bg-primary/10 hover:text-primary transition-colors duration-300">
                <LogIn className="w-4 h-4" /> Login
              </Button>
            </Link>
            <Link to="/builder">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 interactive-button shadow-md hover:shadow-lg hover:shadow-primary/20"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-background/95 backdrop-blur-lg z-40 md:hidden">
          <div className="flex flex-col p-6 gap-6">
            <Link
              to="/"
              className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="w-5 h-5" /> Home
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Code className="w-5 h-5" /> Services
            </Link>
            <Link
              to="/builder"
              className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Layers className="w-5 h-5" /> Service Builder
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Info className="w-5 h-5" /> About
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Mail className="w-5 h-5" /> Contact
            </Link>
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <LogIn className="w-4 h-4" /> Login
                </Button>
              </Link>
              <Link to="/builder" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
