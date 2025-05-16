
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CheckCircle, PlusCircle, MinusCircle, Package, Filter, Tag, Clock, Sparkles, Shield, Zap, Layers, Globe, Code, Database, Search, LineChart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

// Service Categories and Items with expanded sub-categories
const services = {
  webDevelopment: [
    { id: "web1", name: "Basic Website (5 pages)", price: 999, time: 2, description: "Clean, responsive website with up to 5 pages", category: "websites" },
    { id: "web2", name: "Custom Website (10+ pages)", price: 1999, time: 4, description: "Fully custom design with CMS integration", category: "websites" },
    { id: "web3", name: "E-commerce Store", price: 2499, time: 5, description: "Complete online store with payment processing", category: "ecommerce" },
    { id: "web4", name: "Web Application", price: 4999, time: 8, description: "Custom web application with user authentication", category: "applications" },
    { id: "web5", name: "Landing Page", price: 599, time: 1, description: "High-converting single page design", category: "websites" },
    { id: "web6", name: "Website Maintenance", price: 299, time: 0, description: "Monthly updates and security patches", category: "maintenance" },
    { id: "web7", name: "Website Redesign", price: 1499, time: 3, description: "Complete overhaul of existing website", category: "websites" },
    { id: "web8", name: "Progressive Web App", price: 3999, time: 7, description: "App-like experience for web applications", category: "applications" },
    { id: "web9", name: "Shopify Store", price: 1899, time: 3, description: "Custom Shopify store with theme development", category: "ecommerce" },
    { id: "web10", name: "WooCommerce Store", price: 2199, time: 4, description: "WordPress + WooCommerce solution", category: "ecommerce" },
    { id: "web11", name: "Web Performance Optimization", price: 799, time: 2, description: "Speed up your existing website", category: "maintenance" },
    { id: "web12", name: "API Integration", price: 1299, time: 3, description: "Connect your website to third-party services", category: "applications" },
  ],
  seoServices: [
    { id: "seo1", name: "SEO Audit", price: 499, time: 1, description: "Comprehensive analysis of your website's SEO", category: "analysis" },
    { id: "seo2", name: "Keyword Research", price: 399, time: 1, description: "In-depth keyword research and competitor analysis", category: "analysis" },
    { id: "seo3", name: "On-Page Optimization", price: 799, time: 2, description: "Complete on-page SEO implementation", category: "optimization" },
    { id: "seo4", name: "Link Building", price: 999, time: 3, description: "Quality backlink acquisition strategy", category: "offpage" },
    { id: "seo5", name: "Local SEO", price: 599, time: 2, description: "Local search optimization for regional businesses", category: "specialized" },
    { id: "seo6", name: "Technical SEO", price: 899, time: 2, description: "Fix technical issues affecting search performance", category: "optimization" },
    { id: "seo7", name: "Content Strategy", price: 699, time: 2, description: "SEO-focused content planning and creation", category: "content" },
    { id: "seo8", name: "SEO Monitoring", price: 349, time: 1, description: "Ongoing rank tracking and analytics", category: "analysis" },
    { id: "seo9", name: "E-commerce SEO", price: 1299, time: 3, description: "Specialized SEO for online stores", category: "specialized" },
    { id: "seo10", name: "International SEO", price: 1499, time: 4, description: "Multi-language and multi-region optimization", category: "specialized" },
    { id: "seo11", name: "Competitive Analysis", price: 599, time: 2, description: "Detailed competitor SEO research", category: "analysis" },
    { id: "seo12", name: "Schema Markup", price: 499, time: 1, description: "Structured data implementation for rich snippets", category: "optimization" },
  ],
  digitalMarketing: [
    { id: "dm1", name: "Social Media Management", price: 899, time: 1, description: "Monthly content creation and scheduling", category: "social" },
    { id: "dm2", name: "Email Marketing Campaign", price: 699, time: 2, description: "Email sequence design and setup", category: "email" },
    { id: "dm3", name: "PPC Campaign Setup", price: 1299, time: 2, description: "Google Ads campaign creation and optimization", category: "advertising" },
    { id: "dm4", name: "Content Marketing", price: 1499, time: 3, description: "Blog posts and content strategy", category: "content" },
    { id: "dm5", name: "Social Media Advertising", price: 999, time: 2, description: "Facebook & Instagram ad campaigns", category: "advertising" },
    { id: "dm6", name: "Influencer Marketing", price: 1299, time: 3, description: "Connect with relevant influencers in your niche", category: "social" },
    { id: "dm7", name: "Marketing Automation", price: 1699, time: 4, description: "Set up automated marketing workflows", category: "automation" },
    { id: "dm8", name: "Video Marketing", price: 1899, time: 4, description: "Video content creation and strategy", category: "content" },
    { id: "dm9", name: "Conversion Rate Optimization", price: 1499, time: 3, description: "Improve website conversion rates", category: "optimization" },
    { id: "dm10", name: "Marketing Analytics Setup", price: 799, time: 2, description: "Comprehensive tracking and reporting", category: "analytics" },
    { id: "dm11", name: "Display Advertising", price: 999, time: 2, description: "Banner and visual ad campaigns", category: "advertising" },
    { id: "dm12", name: "Marketing Strategy", price: 2499, time: 5, description: "Comprehensive marketing plan development", category: "strategy" },
  ],
  branding: [
    { id: "br1", name: "Logo Design", price: 599, time: 2, description: "Professional logo with multiple concepts", category: "identity" },
    { id: "br2", name: "Brand Guidelines", price: 899, time: 2, description: "Complete brand style guide", category: "identity" },
    { id: "br3", name: "Business Cards & Stationery", price: 349, time: 1, description: "Business card, letterhead, and envelope design", category: "collateral" },
    { id: "br4", name: "Brand Strategy", price: 1999, time: 3, description: "Comprehensive brand positioning and strategy", category: "strategy" },
    { id: "br5", name: "Brand Messaging", price: 899, time: 2, description: "Develop your brand voice and key messages", category: "strategy" },
    { id: "br6", name: "Visual Identity System", price: 1499, time: 3, description: "Complete visual brand identity package", category: "identity" },
    { id: "br7", name: "Brand Naming", price: 999, time: 2, description: "Creative naming for companies or products", category: "strategy" },
    { id: "br8", name: "Packaging Design", price: 1299, time: 3, description: "Custom product packaging design", category: "collateral" },
    { id: "br9", name: "Brand Audit", price: 699, time: 2, description: "Analysis of your current brand presence", category: "strategy" },
    { id: "br10", name: "Brand Illustrations", price: 899, time: 2, description: "Custom illustrations for your brand", category: "identity" },
    { id: "br11", name: "Social Media Branding", price: 599, time: 1, description: "Cohesive branding for social platforms", category: "collateral" },
    { id: "br12", name: "Brand Photography", price: 1499, time: 3, description: "Professional photoshoot for brand assets", category: "collateral" },
  ],
  contentServices: [
    { id: "cs1", name: "Blog Writing (5 Articles)", price: 799, time: 2, description: "SEO-optimized blog content", category: "writing" },
    { id: "cs2", name: "Website Copywriting", price: 1299, time: 3, description: "Professional copy for your entire website", category: "writing" },
    { id: "cs3", name: "Product Descriptions (10)", price: 599, time: 1, description: "Compelling product descriptions", category: "writing" },
    { id: "cs4", name: "Email Newsletter Series", price: 899, time: 2, description: "Engaging email content for campaigns", category: "writing" },
    { id: "cs5", name: "Video Script Writing", price: 699, time: 2, description: "Professional scripts for video content", category: "multimedia" },
    { id: "cs6", name: "White Paper Creation", price: 1499, time: 3, description: "In-depth industry white papers", category: "specialized" },
    { id: "cs7", name: "Case Study Development", price: 999, time: 2, description: "Customer success story narratives", category: "specialized" },
    { id: "cs8", name: "Infographic Design", price: 599, time: 1, description: "Visual content creation", category: "multimedia" },
    { id: "cs9", name: "Social Media Content", price: 699, time: 2, description: "30-day social content calendar", category: "social" },
    { id: "cs10", name: "Content Strategy", price: 1299, time: 3, description: "Comprehensive content planning", category: "strategy" },
    { id: "cs11", name: "Press Release Writing", price: 499, time: 1, description: "Professional press releases", category: "specialized" },
    { id: "cs12", name: "Podcast Production", price: 1699, time: 4, description: "Full podcast production services", category: "multimedia" },
  ],
  techServices: [
    { id: "tech1", name: "IT Consulting (5 Hours)", price: 899, time: 1, description: "Technical consultation and guidance", category: "consulting" },
    { id: "tech2", name: "Cloud Migration", price: 2499, time: 5, description: "Move your infrastructure to the cloud", category: "infrastructure" },
    { id: "tech3", name: "DevOps Implementation", price: 3499, time: 6, description: "Streamline development workflows", category: "infrastructure" },
    { id: "tech4", name: "Database Optimization", price: 1499, time: 3, description: "Improve database performance", category: "optimization" },
    { id: "tech5", name: "Tech Stack Audit", price: 999, time: 2, description: "Evaluate your current technology", category: "consulting" },
    { id: "tech6", name: "Custom Software Development", price: 4999, time: 8, description: "Build custom software solutions", category: "development" },
    { id: "tech7", name: "Mobile App Development", price: 5999, time: 10, description: "iOS and Android app creation", category: "development" },
    { id: "tech8", name: "Cybersecurity Audit", price: 1999, time: 4, description: "Identify security vulnerabilities", category: "security" },
    { id: "tech9", name: "AI/Machine Learning Integration", price: 3999, time: 7, description: "Implement AI solutions", category: "development" },
    { id: "tech10", name: "Data Analytics Setup", price: 1799, time: 3, description: "Business intelligence implementation", category: "analytics" },
    { id: "tech11", name: "Legacy System Modernization", price: 3999, time: 6, description: "Update outdated technology", category: "infrastructure" },
    { id: "tech12", name: "API Development", price: 2499, time: 5, description: "Create robust APIs for your business", category: "development" },
  ]
};

// Service subcategories
const serviceSubcategories = {
  webDevelopment: ["All", "websites", "ecommerce", "applications", "maintenance"],
  seoServices: ["All", "analysis", "optimization", "offpage", "content", "specialized"],
  digitalMarketing: ["All", "social", "email", "advertising", "content", "automation", "optimization", "analytics", "strategy"],
  branding: ["All", "identity", "collateral", "strategy"],
  contentServices: ["All", "writing", "multimedia", "specialized", "social", "strategy"],
  techServices: ["All", "consulting", "infrastructure", "development", "optimization", "security", "analytics"]
};

// Pre-built service kits with more variety
const kits = [
  {
    id: "kit1",
    name: "Startup Launch Kit",
    description: "Everything needed to launch a startup online",
    price: 1899,
    time: 4,
    services: ["web1", "br1", "seo1", "dm1"],
    badge: "Most Popular",
    category: "startup"
  },
  {
    id: "kit2",
    name: "Web & SEO Pack",
    description: "Comprehensive web presence with advanced SEO",
    price: 3499,
    time: 6,
    services: ["web2", "seo2", "seo3", "seo4"],
    badge: "Best Value",
    category: "growth"
  },
  {
    id: "kit3",
    name: "Lead Generation Funnel",
    description: "Complete funnel setup for lead generation",
    price: 4799,
    time: 8, 
    services: ["web5", "dm2", "dm3", "seo3"],
    badge: "Advanced",
    category: "marketing"
  },
  {
    id: "kit4",
    name: "Social Media Boost",
    description: "Complete social media presence overhaul",
    price: 2599,
    time: 4,
    services: ["dm1", "dm5", "br1", "br2"],
    badge: "Trending",
    category: "branding"
  },
  {
    id: "kit5",
    name: "E-commerce Complete",
    description: "Everything needed for successful online store",
    price: 5899,
    time: 10,
    services: ["web3", "seo5", "dm5", "cs3"],
    badge: "Premium",
    category: "ecommerce"
  },
  {
    id: "kit6",
    name: "Content Marketing Pro",
    description: "Comprehensive content strategy and creation",
    price: 3299,
    time: 6,
    services: ["cs1", "cs9", "cs10", "dm4"],
    badge: null,
    category: "marketing"
  },
  {
    id: "kit7",
    name: "Enterprise Technology",
    description: "High-end technology solutions for large businesses",
    price: 8999,
    time: 12,
    services: ["tech6", "tech8", "tech10", "web4"],
    badge: "Enterprise",
    category: "enterprise"
  },
  {
    id: "kit8",
    name: "Local Business Bundle",
    description: "Essential digital presence for local businesses",
    price: 1999,
    time: 3,
    services: ["web1", "seo5", "dm1", "br1"],
    badge: null,
    category: "startup"
  },
];

// Kit categories
const kitCategories = ["All", "startup", "growth", "marketing", "branding", "ecommerce", "enterprise"];

export default function ServiceBuilder() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("kits");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState("All");
  const [activeKitCategory, setActiveKitCategory] = useState("All");
  const [showPremiumOptions, setShowPremiumOptions] = useState(false);
  const [sortMethod, setSortMethod] = useState("recommended");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Calculate total price and time
    let price = 0;
    let time = 0;

    // Flatten all services
    const allServices = [
      ...services.webDevelopment,
      ...services.seoServices,
      ...services.digitalMarketing,
      ...services.branding,
      ...services.contentServices,
      ...services.techServices,
    ];

    selectedServices.forEach(serviceId => {
      // Check if it's a kit
      const selectedKit = kits.find(kit => kit.id === serviceId);
      if (selectedKit) {
        price += selectedKit.price;
        time = Math.max(time, selectedKit.time); // Use the longer time for kits
      } else {
        // It's an individual service
        const service = allServices.find(s => s.id === serviceId);
        if (service) {
          price += service.price;
          time += service.time;
        }
      }
    });

    setTotalPrice(price);
    setTotalTime(time);
  }, [selectedServices]);

  const toggleService = (serviceId: string, isKit = false) => {
    setSelectedServices(prev => {
      // If adding a kit, remove any previously added kit
      if (isKit && !prev.includes(serviceId)) {
        const updatedSelection = prev.filter(id => !kits.some(kit => kit.id === id));
        return [...updatedSelection, serviceId];
      }

      // If already selected, remove it
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } 
      
      // Otherwise add it
      return [...prev, serviceId];
    });
  };

  const handleAddToCart = () => {
    toast.success("Your service package has been added to your cart!");
  };

  const handleRequestConsultation = () => {
    toast.success("Consultation request sent! Our team will contact you shortly.");
  };

  // Filter and sort services based on subcategory and sort method
  const getFilteredServices = (serviceCategory: keyof typeof services) => {
    let filteredServices = services[serviceCategory];
    
    // Filter by subcategory
    if (activeSubcategory !== "All") {
      filteredServices = filteredServices.filter(service => service.category === activeSubcategory);
    }

    // Filter by premium
    if (!showPremiumOptions) {
      filteredServices = filteredServices.filter(service => service.price < 2000);
    }

    // Sort services
    switch (sortMethod) {
      case "price-asc":
        return [...filteredServices].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...filteredServices].sort((a, b) => b.price - a.price);
      case "time-asc":
        return [...filteredServices].sort((a, b) => a.time - b.time);
      default: // recommended
        return filteredServices;
    }
  };

  // Filter kits based on category
  const getFilteredKits = () => {
    let filteredKits = kits;
    
    // Filter by category
    if (activeKitCategory !== "All") {
      filteredKits = filteredKits.filter(kit => kit.category === activeKitCategory);
    }

    // Filter by premium
    if (!showPremiumOptions) {
      filteredKits = filteredKits.filter(kit => kit.price < 4000);
    }

    // Sort kits
    switch (sortMethod) {
      case "price-asc":
        return [...filteredKits].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...filteredKits].sort((a, b) => b.price - a.price);
      case "time-asc":
        return [...filteredKits].sort((a, b) => a.time - b.time);
      default: // recommended
        return filteredKits;
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Build Your Custom Service Package</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Create your perfect service package by selecting the services you need. 
              Mix and match or choose from our pre-built kits.
            </p>
          </ScrollReveal>

          {/* Filter controls */}
          <ScrollReveal>
            <Card className="mb-8 overflow-hidden border-none shadow-md glass-effect">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-primary" />
                    <h3 className="font-medium">Filter Options</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm text-muted-foreground">Show Premium Options</span>
                    <Switch 
                      checked={showPremiumOptions}
                      onCheckedChange={setShowPremiumOptions}
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Sort by:</span>
                </div>
                
                <ToggleGroup 
                  type="single" 
                  className="justify-start" 
                  value={sortMethod}
                  onValueChange={(value) => {
                    if (value) setSortMethod(value);
                  }}
                >
                  <ToggleGroupItem value="recommended" className="text-xs">Recommended</ToggleGroupItem>
                  <ToggleGroupItem value="price-asc" className="text-xs">Price (Low to High)</ToggleGroupItem>
                  <ToggleGroupItem value="price-desc" className="text-xs">Price (High to Low)</ToggleGroupItem>
                  <ToggleGroupItem value="time-asc" className="text-xs">Delivery Time</ToggleGroupItem>
                </ToggleGroup>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <Tabs defaultValue="kits" value={activeCategory} onValueChange={(value) => {
                  setActiveCategory(value);
                  setActiveSubcategory("All");
                  setActiveKitCategory("All");
                }} className="w-full">
                  <TabsList className="grid grid-cols-6 mb-8">
                    <TabsTrigger value="kits" className="text-xs md:text-sm">Service Kits</TabsTrigger>
                    <TabsTrigger value="webDevelopment" className="text-xs md:text-sm">Web Dev</TabsTrigger>
                    <TabsTrigger value="seoServices" className="text-xs md:text-sm">SEO</TabsTrigger>
                    <TabsTrigger value="digitalMarketing" className="text-xs md:text-sm">Marketing</TabsTrigger>
                    <TabsTrigger value="branding" className="text-xs md:text-sm">Branding</TabsTrigger>
                    <TabsTrigger value="contentServices" className="text-xs md:text-sm">Content</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="kits">
                    <div className="flex items-center mb-6 gap-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold">Pre-built Service Kits</h3>
                      </div>
                    </div>

                    {/* Kit categories filter */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Filter by category:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {kitCategories.map(cat => (
                          <Badge
                            key={cat}
                            variant={activeKitCategory === cat ? "default" : "outline"}
                            className="cursor-pointer capitalize"
                            onClick={() => setActiveKitCategory(cat)}
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {getFilteredKits().map((kit) => (
                        <Card key={kit.id} className={`border transition-all ${selectedServices.includes(kit.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'} glass-effect`} data-aos="fade-up">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center space-x-2 mb-2">
                                  <h4 className="font-bold text-lg">{kit.name}</h4>
                                  {kit.badge && (
                                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                      {kit.badge}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{kit.description}</p>
                                <div className="text-sm">
                                  <span className="font-medium">${kit.price}</span>
                                  <span className="text-muted-foreground mx-2">•</span>
                                  <span className="text-muted-foreground">{kit.time} week{kit.time !== 1 ? 's' : ''}</span>
                                  <span className="text-muted-foreground mx-2">•</span>
                                  <span className="capitalize text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full">{kit.category}</span>
                                </div>
                              </div>
                              <Button
                                variant={selectedServices.includes(kit.id) ? "default" : "outline"}
                                size="sm"
                                className="ml-4 flex-shrink-0"
                                onClick={() => toggleService(kit.id, true)}
                              >
                                {selectedServices.includes(kit.id) ? (
                                  <>
                                    <CheckCircle className="w-4 h-4 mr-1" /> Selected
                                  </>
                                ) : (
                                  <>
                                    <PlusCircle className="w-4 h-4 mr-1" /> Select Kit
                                  </>
                                )}
                              </Button>
                            </div>
                            
                            <div className="mt-3 pt-3 border-t">
                              <p className="text-xs font-medium mb-2">Included services:</p>
                              <div className="grid grid-cols-2 gap-2">
                                {kit.services.map(serviceId => {
                                  // Find the service from all services
                                  const allServices = [
                                    ...services.webDevelopment,
                                    ...services.seoServices,
                                    ...services.digitalMarketing,
                                    ...services.branding,
                                    ...services.contentServices,
                                    ...services.techServices,
                                  ];
                                  const service = allServices.find(s => s.id === serviceId);
                                  
                                  return service && (
                                    <div key={serviceId} className="flex items-center text-xs">
                                      <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                                      <span className="truncate">{service.name}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      {getFilteredKits().length === 0 && (
                        <div className="text-center py-8 bg-muted/30 rounded-lg">
                          <p className="text-muted-foreground">No kits match the current filters.</p>
                          <Button 
                            variant="link" 
                            onClick={() => {
                              setActiveKitCategory("All");
                              setShowPremiumOptions(true);
                            }}
                          >
                            Reset filters
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  {/* Web Development Tab */}
                  <TabsContent value="webDevelopment">
                    <div className="flex items-center mb-6 gap-4">
                      <div className="flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold">Web Development Services</h3>
                      </div>
                    </div>

                    {/* Subcategory filter */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Filter by type:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceSubcategories.webDevelopment.map(cat => (
                          <Badge
                            key={cat}
                            variant={activeSubcategory === cat ? "default" : "outline"}
                            className="cursor-pointer capitalize"
                            onClick={() => setActiveSubcategory(cat)}
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {getFilteredServices("webDevelopment").map((service, index) => (
                        <Card key={service.id} 
                          className={`border transition-all ${selectedServices.includes(service.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'}`}
                          data-aos="fade-up"
                          data-aos-delay={index * 50}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium">{service.name}</h4>
                                  <Badge variant="outline" className="capitalize text-xs">{service.category}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                                <div className="text-sm mt-1">
                                  <span className="font-medium">${service.price}</span>
                                  <span className="text-muted-foreground mx-2">•</span>
                                  <span className="text-muted-foreground">
                                    {service.time > 0 ? `${service.time} week${service.time !== 1 ? 's' : ''}` : 'Ongoing'}
                                  </span>
                                </div>
                              </div>
                              <Button
                                variant={selectedServices.includes(service.id) ? "default" : "outline"}
                                size="sm"
                                className="ml-4 h-8 flex-shrink-0"
                                onClick={() => toggleService(service.id)}
                              >
                                {selectedServices.includes(service.id) ? (
                                  <MinusCircle className="w-4 h-4" />
                                ) : (
                                  <PlusCircle className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      {getFilteredServices("webDevelopment").length === 0 && (
                        <div className="text-center py-8 bg-muted/30 rounded-lg col-span-2">
                          <p className="text-muted-foreground">No services match the current filters.</p>
                          <Button 
                            variant="link" 
                            onClick={() => {
                              setActiveSubcategory("All");
                              setShowPremiumOptions(true);
                            }}
                          >
                            Reset filters
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  {/* SEO Services Tab */}
                  <TabsContent value="seoServices">
                    <div className="flex items-center mb-6 gap-4">
                      <div className="flex items-center gap-2">
                        <Search className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold">SEO Services</h3>
                      </div>
                    </div>

                    {/* Subcategory filter */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Filter by type:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceSubcategories.seoServices.map(cat => (
                          <Badge
                            key={cat}
                            variant={activeSubcategory === cat ? "default" : "outline"}
                            className="cursor-pointer capitalize"
                            onClick={() => setActiveSubcategory(cat)}
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {getFilteredServices("seoServices").map((service, index) => (
                        <Card key={service.id} 
                          className={`border transition-all ${selectedServices.includes(service.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'}`}
                          data-aos="fade-up"
                          data-aos-delay={index * 50}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium">{service.name}</h4>
                                  <Badge variant="outline" className="capitalize text-xs">{service.category}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                                <div className="text-sm mt-1">
                                  <span className="font-medium">${service.price}</span>
                                  <span className="text-muted-foreground mx-2">•</span>
                                  <span className="text-muted-foreground">
                                    {service.time > 0 ? `${service.time} week${service.time !== 1 ? 's' : ''}` : 'Ongoing'}
                                  </span>
                                </div>
                              </div>
                              <Button
                                variant={selectedServices.includes(service.id) ? "default" : "outline"}
                                size="sm"
                                className="ml-4 h-8 flex-shrink-0"
                                onClick={() => toggleService(service.id)}
                              >
                                {selectedServices.includes(service.id) ? (
                                  <MinusCircle className="w-4 h-4" />
                                ) : (
                                  <PlusCircle className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      {getFilteredServices("seoServices").length === 0 && (
                        <div className="text-center py-8 bg-muted/30 rounded-lg col-span-2">
                          <p className="text-muted-foreground">No services match the current filters.</p>
                          <Button 
                            variant="link" 
                            onClick={() => {
                              setActiveSubcategory("All");
                              setShowPremiumOptions(true);
                            }}
                          >
                            Reset filters
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  {/* Digital Marketing Tab */}
                  <TabsContent value="digitalMarketing">
                    <div className="flex items-center mb-6 gap-4">
                      <div className="flex items-center gap-2">
                        <LineChart className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold">Digital Marketing Services</h3>
                      </div>
                    </div>
                    
                    {/* Subcategory filter */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Filter by type:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceSubcategories.digitalMarketing.map(cat => (
                          <Badge
                            key={cat}
                            variant={activeSubcategory === cat ? "default" : "outline"}
                            className="cursor-pointer capitalize"
                            onClick={() => setActiveSubcategory(cat)}
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {getFilteredServices("digitalMarketing").map((service, index) => (
                        <Card key={service.id} 
                          className={`border transition-all ${selectedServices.includes(service.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'}`}
                          data-aos="fade-up"
                          data-aos-delay={index * 50}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium">{service.name}</h4>
                                  <Badge variant="outline" className="capitalize text-xs">{service.category}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                                <div className="text-sm mt-1">
                                  <span className="font-medium">${service.price}</span>
                                  <span className="text-muted-foreground mx-2">•</span>
                                  <span className="text-muted-foreground">
                                    {service.time > 0 ? `${service.time} week${service.time !== 1 ? 's' : ''}` : 'Ongoing'}
                                  </span>
                                </div>
                              </div>
                              <Button
                                variant={selectedServices.includes(service.id) ? "default" : "outline"}
                                size="sm"
                                className="ml-4 h-8 flex-shrink-0"
                                onClick={() => toggleService(service.id)}
                              >
                                {selectedServices.includes(service.id) ? (
                                  <MinusCircle className="w-4 h-4" />
                                ) : (
                                  <PlusCircle className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      {getFilteredServices("digitalMarketing").length === 0 && (
                        <div className="text-center py-8 bg-muted/30 rounded-lg col-span-2">
                          <p className="text-muted-foreground">No services match the current filters.</p>
                          <Button 
                            variant="link" 
                            onClick={() => {
                              setActiveSubcategory("All");
                              setShowPremiumOptions(true);
                            }}
                          >
                            Reset filters
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  {/* Branding Tab */}
                  <TabsContent value="branding">
                    <div className="flex items-center mb-6 gap-4">
                      <div className="flex items-center gap-2">
                        <Layers className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold">Branding & Design Services</h3>
                      </div>
                    </div>
                    
                    {/* Subcategory filter */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Filter by type:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceSubcategories.branding.map(cat => (
                          <Badge
                            key={cat}
                            variant={activeSubcategory === cat ? "default" : "outline"}
                            className="cursor-pointer capitalize"
                            onClick={() => setActiveSubcategory(cat)}
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {getFilteredServices("branding").map((service, index) => (
                        <Card key={service.id} 
                          className={`border transition-all ${selectedServices.includes(service.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'}`}
                          data-aos="fade-up"
                          data-aos-delay={index * 50}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium">{service.name}</h4>
                                  <Badge variant="outline" className="capitalize text-xs">{service.category}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                                <div className="text-sm mt-1">
                                  <span className="font-medium">${service.price}</span>
                                  <span className="text-muted-foreground mx-2">•</span>
                                  <span className="text-muted-foreground">
                                    {service.time > 0 ? `${service.time} week${service.time !== 1 ? 's' : ''}` : 'Ongoing'}
                                  </span>
                                </div>
                              </div>
                              <Button
                                variant={selectedServices.includes(service.id) ? "default" : "outline"}
                                size="sm"
                                className="ml-4 h-8 flex-shrink-0"
                                onClick={() => toggleService(service.id)}
                              >
                                {selectedServices.includes(service.id) ? (
                                  <MinusCircle className="w-4 h-4" />
                                ) : (
                                  <PlusCircle className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      {getFilteredServices("branding").length === 0 && (
                        <div className="text-center py-8 bg-muted/30 rounded-lg col-span-2">
                          <p className="text-muted-foreground">No services match the current filters.</p>
                          <Button 
                            variant="link" 
                            onClick={() => {
                              setActiveSubcategory("All");
                              setShowPremiumOptions(true);
                            }}
                          >
                            Reset filters
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  {/* Content Services Tab */}
                  <TabsContent value="contentServices">
                    <div className="flex items-center mb-6 gap-4">
                      <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold">Content Services</h3>
                      </div>
                    </div>
                    
                    {/* Subcategory filter */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Filter by type:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceSubcategories.contentServices.map(cat => (
                          <Badge
                            key={cat}
                            variant={activeSubcategory === cat ? "default" : "outline"}
                            className="cursor-pointer capitalize"
                            onClick={() => setActiveSubcategory(cat)}
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {getFilteredServices("contentServices").map((service, index) => (
                        <Card key={service.id} 
                          className={`border transition-all ${selectedServices.includes(service.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'}`}
                          data-aos="fade-up"
                          data-aos-delay={index * 50}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium">{service.name}</h4>
                                  <Badge variant="outline" className="capitalize text-xs">{service.category}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                                <div className="text-sm mt-1">
                                  <span className="font-medium">${service.price}</span>
                                  <span className="text-muted-foreground mx-2">•</span>
                                  <span className="text-muted-foreground">
                                    {service.time > 0 ? `${service.time} week${service.time !== 1 ? 's' : ''}` : 'Ongoing'}
                                  </span>
                                </div>
                              </div>
                              <Button
                                variant={selectedServices.includes(service.id) ? "default" : "outline"}
                                size="sm"
                                className="ml-4 h-8 flex-shrink-0"
                                onClick={() => toggleService(service.id)}
                              >
                                {selectedServices.includes(service.id) ? (
                                  <MinusCircle className="w-4 h-4" />
                                ) : (
                                  <PlusCircle className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      {getFilteredServices("contentServices").length === 0 && (
                        <div className="text-center py-8 bg-muted/30 rounded-lg col-span-2">
                          <p className="text-muted-foreground">No services match the current filters.</p>
                          <Button 
                            variant="link" 
                            onClick={() => {
                              setActiveSubcategory("All");
                              setShowPremiumOptions(true);
                            }}
                          >
                            Reset filters
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </ScrollReveal>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="sticky top-24">
                  <Card className="glass-effect shadow-lg border-none">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Package className="w-5 h-5 mr-2" />
                        Your Service Package
                      </h3>
                      
                      {selectedServices.length > 0 ? (
                        <>
                          <div className="mb-4 max-h-64 overflow-y-auto scrollbar-thin">
                            {selectedServices.map(serviceId => {
                              // Check if it's a kit
                              const kit = kits.find(k => k.id === serviceId);
                              
                              if (kit) {
                                return (
                                  <div key={serviceId} className="flex justify-between items-center py-2 border-b">
                                    <div>
                                      <div className="font-medium">{kit.name}</div>
                                      <div className="text-xs text-muted-foreground">Service Kit</div>
                                    </div>
                                    <div className="text-right">
                                      <div>${kit.price}</div>
                                      <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="h-6 p-0 text-muted-foreground hover:text-destructive"
                                        onClick={() => toggleService(serviceId)}
                                      >
                                        <MinusCircle className="w-3 h-3" />
                                      </Button>
                                    </div>
                                  </div>
                                );
                              }
                              
                              // Find individual service from all service categories
                              const allServices = [
                                ...services.webDevelopment,
                                ...services.seoServices,
                                ...services.digitalMarketing,
                                ...services.branding,
                                ...services.contentServices,
                                ...services.techServices,
                              ];
                              
                              const service = allServices.find(s => s.id === serviceId);
                              
                              return service && (
                                <div key={serviceId} className="flex justify-between items-center py-2 border-b">
                                  <div>
                                    <div className="font-medium">{service.name}</div>
                                    <div className="text-xs text-muted-foreground capitalize">{service.category}</div>
                                  </div>
                                  <div className="text-right">
                                    <div>${service.price}</div>
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="h-6 p-0 text-muted-foreground hover:text-destructive"
                                      onClick={() => toggleService(serviceId)}
                                    >
                                      <MinusCircle className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          
                          <Separator className="my-4" />
                          
                          <div className="space-y-2 mb-6">
                            <div className="flex justify-between">
                              <span>Total Price:</span>
                              <span className="font-bold">${totalPrice}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Estimated Delivery:</span>
                              <span>{totalTime} week{totalTime !== 1 ? 's' : ''}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <Button className="w-full group" onClick={handleAddToCart}>
                              <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                              Continue to Checkout
                            </Button>
                            <Button variant="outline" className="w-full" onClick={handleRequestConsultation}>
                              <Shield className="w-4 h-4 mr-2" />
                              Request Consultation
                            </Button>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                            <Package className="w-8 h-8 text-muted-foreground" />
                          </div>
                          <p className="text-muted-foreground mb-4">
                            Your package is empty. Select services or a service kit to build your custom solution.
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setActiveCategory('kits')}
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Browse Service Kits
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
