
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
            D
          </div>
          <span className="text-xl font-bold">DigitalBuild</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            to="/builder"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Service Builder
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <Link to="/login">
              <Button variant="outline" size="sm" className="mr-2">
                Login
              </Button>
            </Link>
            <Link to="/builder">
              <Button size="sm">Get Started</Button>
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
        <div className="fixed inset-0 top-[60px] bg-background z-40 md:hidden">
          <div className="flex flex-col p-6 gap-6">
            <Link
              to="/"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/builder"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service Builder
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/builder">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
