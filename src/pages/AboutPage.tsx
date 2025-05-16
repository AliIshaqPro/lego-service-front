
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Users, 
  Star, 
  Award, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Briefcase
} from "lucide-react";
import AOS from "aos";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Refresh AOS
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 pt-36 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                About DigitalBuild
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're transforming how businesses approach digital services with our innovative 
                building-block approach to custom solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button size="lg" className="gap-2">
                    Our Services
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="gap-2">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-duration="1000">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop" 
                alt="Team collaboration" 
                className="rounded-xl shadow-2xl border border-border/50 w-full h-auto object-cover z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-xl border border-border bg-primary/5 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-full h-full rounded-xl border border-border bg-accent/5 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight gradient-text">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground">
                To empower businesses with flexible, customizable digital solutions that adapt to their evolving needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            <div 
              className="bg-card rounded-xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every project, focusing on quality, performance, and user experience.
              </p>
            </div>

            <div 
              className="bg-card rounded-xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </div>

            <div 
              className="bg-card rounded-xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in working closely with our clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight gradient-text">
                Our Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Meet the experts behind our innovative digital solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Alexandra Chen",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                delay: 100
              },
              {
                name: "Michael Rodriguez",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                delay: 200
              },
              {
                name: "Sarah Johnson",
                role: "Design Director",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                delay: 300
              },
              {
                name: "David Kim",
                role: "Head of Marketing",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                delay: 400
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={member.delay}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight gradient-text">
                Why Choose DigitalBuild?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We combine technical expertise with a deep understanding of business needs to deliver solutions that drive growth.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                    <CheckCircle className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Customizable Solutions</h3>
                    <p className="text-muted-foreground">
                      Our service builder allows you to create exactly what you need, without paying for features you don't.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                    <CheckCircle className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                    <p className="text-muted-foreground">
                      No hidden fees or surprises. You'll know exactly what you're paying for at every step.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                    <CheckCircle className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our professionals bring years of industry expertise to every project we undertake.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6" data-aos="fade-left" data-aos-duration="1000">
              <div className="bg-card rounded-xl p-6 border border-border shadow-lg text-center flex flex-col items-center justify-center min-h-[200px]">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">10+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border shadow-lg text-center flex flex-col items-center justify-center min-h-[200px]">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border shadow-lg text-center flex flex-col items-center justify-center min-h-[200px]">
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">1000+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border shadow-lg text-center flex flex-col items-center justify-center min-h-[200px]">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/90 to-accent/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Contact us today to discuss how we can help you achieve your digital goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/builder">
                  <Button size="lg" variant="secondary" className="text-primary font-medium text-lg px-8 py-6">
                    Start Building Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-medium text-lg px-8 py-6">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
