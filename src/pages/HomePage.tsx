import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingElement from "@/components/FloatingElement";
import { CheckCircle, ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureShowcase from "@/components/FeatureShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import TechStackSection from "@/components/TechStackSection";
import FaqSection from "@/components/FaqSection";
import ServiceCTA from "@/components/ServiceCTA";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initialize AOS with slower animations
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
    });
    
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      {/* Hero Carousel Section */}
      <HeroCarousel />
      
      {/* Main Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight gradient-text">
                Build Your Digital Future With Premium Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Create custom digital service packages with our dynamic Lego-style builder. 
                Select the services you need and watch your vision come to life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <ScrollReveal delay={1}>
              <div className="bg-card rounded-lg p-6 border border-border shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Custom websites and web applications designed with cutting-edge technology and user-centered design principles.
                </p>
                <Link to="/services" className="text-primary font-medium flex items-center mt-auto group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="bg-card rounded-lg p-6 border border-border shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Data-driven strategies to improve your search visibility and drive organic traffic to your digital properties.
                </p>
                <Link to="/services" className="text-primary font-medium flex items-center mt-auto group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="bg-card rounded-lg p-6 border border-border shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Strategic campaigns that connect your brand with target audiences across all digital touchpoints.
                </p>
                <Link to="/services" className="text-primary font-medium flex items-center mt-auto group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="bg-card rounded-lg p-6 border border-border shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Branding & Design</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Visual identity systems and brand experiences that create emotional connections with your audience.
                </p>
                <Link to="/services" className="text-primary font-medium flex items-center mt-auto group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service CTA Section */}
      <ServiceCTA className="bg-gradient-to-br from-background to-secondary/30" />

      {/* Service Builder Showcase */}
      <FeatureShowcase
        title="Build Your Own Digital Solution"
        description="Our interactive service builder lets you select and combine services like building blocks. Create a completely customized package that meets your exact needs while seeing real-time pricing and delivery estimates."
        image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop"
      >
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
              <CheckCircle className="text-primary w-4 h-4" />
            </div>
            <span>Drag-and-drop interface for intuitive service selection</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
              <CheckCircle className="text-primary w-4 h-4" />
            </div>
            <span>Real-time pricing updates as you build your package</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
              <CheckCircle className="text-primary w-4 h-4" />
            </div>
            <span>Transparent timelines and delivery estimates</span>
          </li>
        </ul>
        <Link to="/builder">
          <Button size="lg" className="gap-2">
            Try the Builder
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </FeatureShowcase>

      {/* Stats Section */}
      <StatsSection />

      {/* Pre-built Kits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight gradient-text">
                Pre-Built Service Kits
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready-to-go packages designed for specific business needs, with the flexibility to customize further.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={1}>
              <div className="bg-card rounded-lg border-none glass-effect overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl h-full flex flex-col">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Most Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Startup Launch Kit</h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    Everything you need to launch your startup online with a professional presence.
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-1">$1,899</div>
                    <div className="text-muted-foreground text-sm">Estimated delivery: 4 weeks</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>5-page Responsive Website</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Logo & Brand Identity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Basic SEO Setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Social Media Profiles</span>
                    </li>
                  </ul>
                  <Link to="/builder" className="mt-auto">
                    <Button className="w-full">Select & Customize</Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="bg-card rounded-lg border-none glass-effect overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl h-full flex flex-col">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Best Value</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Web & SEO Pack</h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    Comprehensive web presence with advanced SEO strategies for maximum visibility.
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-1">$3,499</div>
                    <div className="text-muted-foreground text-sm">Estimated delivery: 6 weeks</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>10-page Custom Website</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Advanced SEO Package</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Content Strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Google Business Optimization</span>
                    </li>
                  </ul>
                  <Link to="/builder" className="mt-auto">
                    <Button className="w-full">Select & Customize</Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="bg-card rounded-lg border-none glass-effect overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl h-full flex flex-col">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Advanced</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Lead Generation Funnel</h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    Complete funnel setup designed to capture and convert high-quality leads.
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-1">$4,799</div>
                    <div className="text-muted-foreground text-sm">Estimated delivery: 8 weeks</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Landing Page Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Email Marketing Setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Lead Magnet Creation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Ad Campaign Setup</span>
                    </li>
                  </ul>
                  <Link to="/builder" className="mt-auto">
                    <Button className="w-full">Select & Customize</Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Advanced Platform Feature */}
      <FeatureShowcase
        title="Enterprise-Grade Platform"
        description="Monitor your projects, communicate with your team, and manage your digital services all in one place. Our dashboard provides complete visibility and control over your digital investments."
        image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
        reverse={true}
      >
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
              <CheckCircle className="text-primary w-4 h-4" />
            </div>
            <span>Real-time project tracking and milestone updates</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
              <CheckCircle className="text-primary w-4 h-4" />
            </div>
            <span>Direct communication with your project team</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
              <CheckCircle className="text-primary w-4 h-4" />
            </div>
            <span>Asset management and collaboration tools</span>
          </li>
        </ul>
        <Link to="/dashboard">
          <Button size="lg" className="gap-2">
            Explore Dashboard
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </FeatureShowcase>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Technology Stack */}
      <TechStackSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/90 to-accent/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Build Your Digital Future?
              </h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Start building your custom service package today and take the next step in your digital journey.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/builder">
                  <Button size="lg" variant="secondary" className="text-primary font-medium text-lg px-8 py-6">
                    Start Building Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-medium text-lg px-8 py-6">
                    Browse All Services
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
