
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Digital Services</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Premium digital services tailored to your unique requirements.
                Choose individual services or comprehensive packages.
              </p>
              <Link to="/builder">
                <Button size="lg" className="gap-2">
                  Build Your Service Package
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <Tabs defaultValue="webDevelopment" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
                <TabsTrigger value="webDevelopment">Web Development</TabsTrigger>
                <TabsTrigger value="seoServices">SEO</TabsTrigger>
                <TabsTrigger value="digitalMarketing">Marketing</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
              </TabsList>
              
              <TabsContent value="webDevelopment">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Web Development</h2>
                    <p className="text-muted-foreground mb-6">
                      From simple websites to complex web applications, our development team 
                      creates beautiful, functional, and responsive digital experiences.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Custom Website Design & Development</p>
                          <p className="text-sm text-muted-foreground">
                            Tailored websites that align with your brand and business goals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">E-commerce Solutions</p>
                          <p className="text-sm text-muted-foreground">
                            Online stores with secure payment processing and inventory management
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Web Application Development</p>
                          <p className="text-sm text-muted-foreground">
                            Custom web apps with user authentication and advanced functionality
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link to="/builder">
                      <Button>Explore Web Development Services</Button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <img 
                      src="https://placehold.co/500x400/2a2a2a/FFFFFF/webp?text=Web+Development" 
                      alt="Web Development"
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ScrollReveal delay={1}>
                    <Card className="border-none shadow-lg glass-effect">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">Basic Website</h3>
                        <p className="text-muted-foreground mb-4">
                          Clean, responsive website with up to 5 pages, perfect for small businesses.
                        </p>
                        <div className="text-2xl font-bold mb-4">$999</div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Responsive design</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Contact form</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Basic SEO setup</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Mobile-friendly</span>
                          </li>
                        </ul>
                        <Link to="/builder">
                          <Button className="w-full">Select & Customize</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </ScrollReveal>

                  <ScrollReveal delay={2}>
                    <Card className="border-none shadow-lg glass-effect relative">
                      <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                        Most Popular
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">Custom Website</h3>
                        <p className="text-muted-foreground mb-4">
                          Fully custom design with CMS integration for easy content management.
                        </p>
                        <div className="text-2xl font-bold mb-4">$1,999</div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>10+ custom pages</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>CMS integration</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Advanced functionality</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Interactive elements</span>
                          </li>
                        </ul>
                        <Link to="/builder">
                          <Button className="w-full">Select & Customize</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </ScrollReveal>

                  <ScrollReveal delay={3}>
                    <Card className="border-none shadow-lg glass-effect">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">E-commerce Store</h3>
                        <p className="text-muted-foreground mb-4">
                          Complete online store with payment processing and product management.
                        </p>
                        <div className="text-2xl font-bold mb-4">$2,499</div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Product catalog</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Secure checkout</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Inventory management</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Customer accounts</span>
                          </li>
                        </ul>
                        <Link to="/builder">
                          <Button className="w-full">Select & Customize</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </div>
              </TabsContent>
              
              <TabsContent value="seoServices">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">SEO Services</h2>
                    <p className="text-muted-foreground mb-6">
                      Improve your visibility in search engines and drive organic traffic
                      with our comprehensive SEO strategies.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Technical SEO</p>
                          <p className="text-sm text-muted-foreground">
                            Optimize your website's structure for better indexing and crawling
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">On-Page Optimization</p>
                          <p className="text-sm text-muted-foreground">
                            Improve individual page elements to rank higher in search results
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Link Building</p>
                          <p className="text-sm text-muted-foreground">
                            Acquire quality backlinks to boost your site's authority
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link to="/builder">
                      <Button>Explore SEO Services</Button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <img 
                      src="https://placehold.co/500x400/2a2a2a/FFFFFF/webp?text=SEO+Services" 
                      alt="SEO Services"
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ScrollReveal delay={1}>
                    <Card className="border-none shadow-lg glass-effect">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">SEO Audit</h3>
                        <p className="text-muted-foreground mb-4">
                          Comprehensive analysis of your website's SEO performance.
                        </p>
                        <div className="text-2xl font-bold mb-4">$499</div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Technical SEO review</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Competitor analysis</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Keyword opportunities</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Detailed report</span>
                          </li>
                        </ul>
                        <Link to="/builder">
                          <Button className="w-full">Select & Customize</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </ScrollReveal>

                  <ScrollReveal delay={2}>
                    <Card className="border-none shadow-lg glass-effect relative">
                      <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                        Best Value
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">On-Page Optimization</h3>
                        <p className="text-muted-foreground mb-4">
                          Complete on-page SEO implementation for better rankings.
                        </p>
                        <div className="text-2xl font-bold mb-4">$799</div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Meta tags optimization</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Content optimization</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Internal linking</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Schema markup</span>
                          </li>
                        </ul>
                        <Link to="/builder">
                          <Button className="w-full">Select & Customize</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </ScrollReveal>

                  <ScrollReveal delay={3}>
                    <Card className="border-none shadow-lg glass-effect">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">Link Building</h3>
                        <p className="text-muted-foreground mb-4">
                          Quality backlink acquisition strategy for better authority.
                        </p>
                        <div className="text-2xl font-bold mb-4">$999</div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Quality link prospecting</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Content promotion</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Guest posting</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span>Monthly reporting</span>
                          </li>
                        </ul>
                        <Link to="/builder">
                          <Button className="w-full">Select & Customize</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </div>
              </TabsContent>
              
              <TabsContent value="digitalMarketing">
                {/* Similar structure to the Web Development Tab */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Digital Marketing</h2>
                    <p className="text-muted-foreground mb-6">
                      Connect with your audience across channels and drive measurable 
                      results with our data-driven marketing strategies.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Social Media Marketing</p>
                          <p className="text-sm text-muted-foreground">
                            Engage your audience across social platforms with targeted content
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Paid Advertising</p>
                          <p className="text-sm text-muted-foreground">
                            Strategic PPC campaigns across Google, Facebook, Instagram and more
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Email Marketing</p>
                          <p className="text-sm text-muted-foreground">
                            Drive conversions with targeted email campaigns and automation
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link to="/builder">
                      <Button>Explore Marketing Services</Button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <img 
                      src="https://placehold.co/500x400/2a2a2a/FFFFFF/webp?text=Digital+Marketing" 
                      alt="Digital Marketing"
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Service Cards for Digital Marketing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Add similar cards as in previous tabs */}
                </div>
              </TabsContent>
              
              <TabsContent value="branding">
                {/* Similar structure to the Web Development Tab */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Branding & Design</h2>
                    <p className="text-muted-foreground mb-6">
                      Create a distinctive and memorable brand identity that resonates 
                      with your target audience and sets you apart from competitors.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Logo Design</p>
                          <p className="text-sm text-muted-foreground">
                            Professional logos that capture your brand's essence
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Brand Identity</p>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive visual systems including color palettes, typography, and style guides
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 bg-primary/10 dark:bg-primary/20 p-1 rounded-full mt-1">
                          <CheckCircle className="text-primary w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">UI/UX Design</p>
                          <p className="text-sm text-muted-foreground">
                            User-centered design for websites, apps, and digital products
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link to="/builder">
                      <Button>Explore Branding Services</Button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <img 
                      src="https://placehold.co/500x400/2a2a2a/FFFFFF/webp?text=Branding" 
                      alt="Branding & Design"
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Service Cards for Branding */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Add similar cards as in previous tabs */}
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/90 to-accent/90 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Custom Service Package?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Mix and match services to create the perfect package for your needs,
                or choose from our pre-built service kits.
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
