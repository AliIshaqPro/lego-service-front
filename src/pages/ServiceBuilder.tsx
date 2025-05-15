import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, PlusCircle, MinusCircle, Package } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

// Service Categories and Items
const services = {
  webDevelopment: [
    { id: "web1", name: "Basic Website (5 pages)", price: 999, time: 2, description: "Clean, responsive website with up to 5 pages" },
    { id: "web2", name: "Custom Website (10+ pages)", price: 1999, time: 4, description: "Fully custom design with CMS integration" },
    { id: "web3", name: "E-commerce Store", price: 2499, time: 5, description: "Complete online store with payment processing" },
    { id: "web4", name: "Web Application", price: 4999, time: 8, description: "Custom web application with user authentication" },
    { id: "web5", name: "Landing Page", price: 599, time: 1, description: "High-converting single page design" },
    { id: "web6", name: "Website Maintenance", price: 299, time: 0, description: "Monthly updates and security patches" },
  ],
  seoServices: [
    { id: "seo1", name: "SEO Audit", price: 499, time: 1, description: "Comprehensive analysis of your website's SEO" },
    { id: "seo2", name: "Keyword Research", price: 399, time: 1, description: "In-depth keyword research and competitor analysis" },
    { id: "seo3", name: "On-Page Optimization", price: 799, time: 2, description: "Complete on-page SEO implementation" },
    { id: "seo4", name: "Link Building", price: 999, time: 3, description: "Quality backlink acquisition strategy" },
    { id: "seo5", name: "Local SEO", price: 599, time: 2, description: "Local search optimization for regional businesses" },
  ],
  digitalMarketing: [
    { id: "dm1", name: "Social Media Management", price: 899, time: 1, description: "Monthly content creation and scheduling" },
    { id: "dm2", name: "Email Marketing Campaign", price: 699, time: 2, description: "Email sequence design and setup" },
    { id: "dm3", name: "PPC Campaign Setup", price: 1299, time: 2, description: "Google Ads campaign creation and optimization" },
    { id: "dm4", name: "Content Marketing", price: 1499, time: 3, description: "Blog posts and content strategy" },
    { id: "dm5", name: "Social Media Advertising", price: 999, time: 2, description: "Facebook & Instagram ad campaigns" },
  ],
  branding: [
    { id: "br1", name: "Logo Design", price: 599, time: 2, description: "Professional logo with multiple concepts" },
    { id: "br2", name: "Brand Guidelines", price: 899, time: 2, description: "Complete brand style guide" },
    { id: "br3", name: "Business Cards & Stationery", price: 349, time: 1, description: "Business card, letterhead, and envelope design" },
    { id: "br4", name: "Brand Strategy", price: 1999, time: 3, description: "Comprehensive brand positioning and strategy" },
  ],
};

// Pre-built service kits
const kits = [
  {
    id: "kit1",
    name: "Startup Launch Kit",
    description: "Everything needed to launch a startup online",
    price: 1899,
    time: 4,
    services: ["web1", "br1", "seo1", "dm1"],
    badge: "Most Popular",
  },
  {
    id: "kit2",
    name: "Web & SEO Pack",
    description: "Comprehensive web presence with advanced SEO",
    price: 3499,
    time: 6,
    services: ["web2", "seo2", "seo3", "seo4"],
    badge: "Best Value",
  },
  {
    id: "kit3",
    name: "Lead Generation Funnel",
    description: "Complete funnel setup for lead generation",
    price: 4799,
    time: 8, 
    services: ["web5", "dm2", "dm3", "seo3"],
    badge: "Advanced",
  },
  {
    id: "kit4",
    name: "Social Media Boost",
    description: "Complete social media presence overhaul",
    price: 2599,
    time: 4,
    services: ["dm1", "dm5", "br1", "br2"],
    badge: "Trending",
  },
];

export default function ServiceBuilder() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("kits");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <Tabs defaultValue="kits" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                  <TabsList className="grid grid-cols-5 mb-8">
                    <TabsTrigger value="kits" className="text-xs md:text-sm">Service Kits</TabsTrigger>
                    <TabsTrigger value="webDevelopment" className="text-xs md:text-sm">Web Dev</TabsTrigger>
                    <TabsTrigger value="seoServices" className="text-xs md:text-sm">SEO</TabsTrigger>
                    <TabsTrigger value="digitalMarketing" className="text-xs md:text-sm">Marketing</TabsTrigger>
                    <TabsTrigger value="branding" className="text-xs md:text-sm">Branding</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="kits">
                    <h3 className="text-xl font-semibold mb-4">Pre-built Service Kits</h3>
                    <div className="space-y-4">
                      {kits.map((kit) => (
                        <Card key={kit.id} className={`border transition-all ${selectedServices.includes(kit.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'}`}>
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
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="webDevelopment">
                    <h3 className="text-xl font-semibold mb-4">Web Development Services</h3>
                    <div className="space-y-3">
                      {services.webDevelopment.map((service) => (
                        <Card key={service.id} className={`border transition-all ${selectedServices.includes(service.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'}`}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{service.name}</h4>
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
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="seoServices">
                    <h3 className="text-xl font-semibold mb-4">SEO Services</h3>
                    <div className="space-y-3">
                      {services.seoServices.map((service) => (
                        <Card key={service.id} className={`border transition-all ${selectedServices.includes(service.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'}`}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{service.name}</h4>
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
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="digitalMarketing">
                    <h3 className="text-xl font-semibold mb-4">Digital Marketing Services</h3>
                    <div className="space-y-3">
                      {services.digitalMarketing.map((service) => (
                        <Card key={service.id} className={`border transition-all ${selectedServices.includes(service.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'}`}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{service.name}</h4>
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
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="branding">
                    <h3 className="text-xl font-semibold mb-4">Branding & Design Services</h3>
                    <div className="space-y-3">
                      {services.branding.map((service) => (
                        <Card key={service.id} className={`border transition-all ${selectedServices.includes(service.id) ? 'border-primary shadow-md' : 'hover:border-primary/50'}`}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{service.name}</h4>
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
                    </div>
                  </TabsContent>
                </Tabs>
              </ScrollReveal>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="sticky top-24">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Package className="w-5 h-5 mr-2" />
                        Your Service Package
                      </h3>
                      
                      {selectedServices.length > 0 ? (
                        <>
                          <div className="mb-4 max-h-64 overflow-y-auto">
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
                              ];
                              
                              const service = allServices.find(s => s.id === serviceId);
                              
                              return service && (
                                <div key={serviceId} className="flex justify-between items-center py-2 border-b">
                                  <div>
                                    <div className="font-medium">{service.name}</div>
                                  </div>
                                  <div className="text-right">
                                    <div>${service.price}</div>
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
                            <Button className="w-full" onClick={handleAddToCart}>
                              Continue to Checkout
                            </Button>
                            <Button variant="outline" className="w-full" onClick={handleRequestConsultation}>
                              Request Consultation
                            </Button>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                            <Package className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <p className="text-muted-foreground mb-4">
                            Your package is empty. Select services or a service kit to get started.
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setActiveCategory('kits')}
                          >
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
