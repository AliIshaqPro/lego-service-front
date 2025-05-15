
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingElement from "@/components/FloatingElement";
import { CheckCircle } from "lucide-react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="container">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight gradient-text leading-tight">
              Build Your Digital Future With Premium Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create custom digital service packages with our dynamic Lego-style builder. Select the services you need and watch your vision come to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="text-base gap-2 shadow-lg">
                  Explore Services
                </Button>
              </Link>
              <Link to="/builder">
                <Button size="lg" variant="outline" className="text-base gap-2">
                  Start Building
                </Button>
              </Link>
            </div>

            {/* Abstract shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-20 animate-spin-slow pointer-events-none">
              <div className="absolute top-0 left-[20%] w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="absolute bottom-0 right-[20%] w-96 h-96 rounded-full bg-accent/20 blur-3xl"></div>
            </div>
          </div>

          <div className="mt-16 max-w-5xl mx-auto relative">
            <FloatingElement className="bg-card rounded-lg p-6 shadow-xl dark:border border-border dark:bg-secondary/30 dark:backdrop-blur-lg">
              <img 
                src="https://placehold.co/1200x600/2a2a2a/FFFFFF/webp?text=Builder+Interface" 
                alt="Service Builder Interface" 
                className="w-full h-auto rounded"
              />
            </FloatingElement>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Digital Services</h2>
              <p className="text-muted-foreground">
                Mix and match from our comprehensive suite of professional services to create your perfect package
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ScrollReveal delay={1}>
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden border-none glass-effect">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Web Development</h3>
                  <p className="text-muted-foreground mb-4">
                    From simple landing pages to complex web applications
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Frontend Development</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Backend Systems</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>CMS Integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden border-none glass-effect">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
                  <p className="text-muted-foreground mb-4">
                    Improve visibility and drive organic traffic
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Keyword Research</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>On-page Optimization</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Link Building</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden border-none glass-effect">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with your audience across channels
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Social Media Marketing</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Email Campaigns</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>PPC Advertising</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden border-none glass-effect">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Branding & Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Create a distinctive and memorable brand identity
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Logo Design</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Brand Guidelines</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>UI/UX Design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <div className="mt-12 text-center">
            <ScrollReveal>
              <Link to="/services">
                <Button variant="outline" size="lg" className="gap-2">
                  View All Services
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Builder Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Build Your Custom Service Package
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our interactive service builder lets you select and customize exactly what you need.
                  Simply add or remove services like building blocks and see your package come together in real-time.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                      <CheckCircle className="text-primary w-4 h-4" />
                    </div>
                    <span>Select only the services you need</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                      <CheckCircle className="text-primary w-4 h-4" />
                    </div>
                    <span>See prices and delivery estimates update in real-time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                      <CheckCircle className="text-primary w-4 h-4" />
                    </div>
                    <span>Choose from pre-built service kits or customize your own</span>
                  </li>
                </ul>
                <Link to="/builder">
                  <Button size="lg">Start Building</Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <FloatingElement className="relative">
                <div className="relative z-10 bg-card rounded-lg p-6 shadow-xl border border-border dark:bg-secondary/30 dark:backdrop-blur-lg">
                  <img 
                    src="https://placehold.co/600x400/2a2a2a/FFFFFF/webp?text=Builder+Demo"
                    alt="Service Builder Demo" 
                    className="w-full h-auto rounded"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-5 -right-5 w-full h-full bg-accent/5 rounded-lg -z-10 rotate-3"></div>
                <div className="absolute top-10 -right-10 w-full h-full bg-primary/5 rounded-lg -z-20 rotate-6"></div>
              </FloatingElement>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pre-built Kits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pre-Built Service Kits</h2>
              <p className="text-muted-foreground">
                Ready-to-go service packages designed for specific business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={1}>
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 duration-300 h-full flex flex-col border-none glass-effect">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Most Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Startup Launch Kit</h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    Everything you need to launch your startup online with a professional presence
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-1">$1,899</div>
                    <div className="text-muted-foreground text-sm">Estimated delivery: 4 weeks</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>5-page Website</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span>Logo Design</span>
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
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 duration-300 h-full flex flex-col border-none glass-effect">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Best Value</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Web & SEO Pack</h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    Comprehensive web presence with advanced SEO strategies for maximum visibility
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-1">$3,499</div>
                    <div className="text-muted-foreground text-sm">Estimated delivery: 6 weeks</div>
                  </div>
                  <ul className="space-y-2 mb-6">
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
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 duration-300 h-full flex flex-col border-none glass-effect">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Advanced</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Lead Generation Funnel</h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    Complete funnel setup designed to capture and convert high-quality leads
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-1">$4,799</div>
                    <div className="text-muted-foreground text-sm">Estimated delivery: 8 weeks</div>
                  </div>
                  <ul className="space-y-2 mb-6">
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
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/90 to-accent/90 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Digital Future?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Start building your custom service package today and take the next step in your digital journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/builder">
                  <Button size="lg" variant="secondary" className="text-primary text-base gap-2">
                    Start Building Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-base gap-2">
                    Contact Our Team
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
