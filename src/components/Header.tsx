
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Home, Code, Layers, Info, Mail, LogIn } from "lucide-react";

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
          : "py-5 bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
            D
          </div>
          <span className="text-xl font-bold text-foreground">DigitalBuild</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Home className="w-4 h-4" /> Home
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Code className="w-4 h-4" /> Services
          </Link>
          <Link
            to="/builder"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Layers className="w-4 h-4" /> Service Builder
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Info className="w-4 h-4" /> About
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" /> Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <LogIn className="w-4 h-4" /> Login
              </Button>
            </Link>
            <Link to="/builder">
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500">
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
