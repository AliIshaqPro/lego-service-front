
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AOS from "aos";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Refresh AOS
    AOS.refresh();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 pt-36 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Contact Us
            </h1>
            <p 
              className="text-xl text-muted-foreground mb-8"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Have questions or ready to start your next project? 
              Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-xl">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle>Our Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  123 Tech Avenue, Suite 500<br />
                  San Francisco, CA 94103<br />
                  United States
                </CardDescription>
                <Link to="https://maps.google.com" target="_blank" className="text-primary mt-4 inline-block font-medium">
                  View on Map
                </Link>
              </CardContent>
            </Card>

            <Card 
              className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-xl">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle>Phone & Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <strong>Support:</strong> +1 (555) 123-4567<br />
                  <strong>Sales:</strong> +1 (555) 987-6543<br />
                  <strong>Email:</strong> info@digitalbuild.com
                </CardDescription>
                <Link to="mailto:info@digitalbuild.com" className="text-primary mt-4 inline-block font-medium">
                  Send Email
                </Link>
              </CardContent>
            </Card>

            <Card 
              className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-xl">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle>Business Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM<br />
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
                  <strong>Sunday:</strong> Closed
                </CardDescription>
                <p className="text-primary mt-4 inline-block font-medium">
                  24/7 Online Support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div 
              className="flex flex-col justify-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have a question about our services or want to discuss a potential project? 
                Fill out the form, and our team will get back to you as soon as possible.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent">What services do you offer?</NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 min-w-[400px] bg-card">
                        <NavigationMenuLink asChild>
                          <div className="p-2">
                            <p className="mb-2">
                              We offer a complete range of digital services including web development, digital marketing, SEO optimization, branding, and custom software solutions.
                            </p>
                            <Link to="/services" className="text-primary font-medium">
                              View All Services
                            </Link>
                          </div>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                
                <NavigationMenu className="mt-2">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent">How does your pricing work?</NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 min-w-[400px] bg-card">
                        <NavigationMenuLink asChild>
                          <div className="p-2">
                            <p className="mb-2">
                              Our pricing is based on the specific services and features you select through our interactive service builder. This allows you to create a package that fits your exact needs and budget.
                            </p>
                            <Link to="/builder" className="text-primary font-medium">
                              Try Our Service Builder
                            </Link>
                          </div>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <p>24-hour response time</p>
              </div>
            </div>
            
            <div 
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Card className="border-border/50 shadow-xl">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your project..."
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden border border-border shadow-lg h-[400px]" data-aos="zoom-in">
            <iframe 
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764016042!3d37.75781499602919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1653498094669!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/90 to-accent/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Use our interactive service builder to create your custom digital solution today.
              </p>
              <Link to="/builder">
                <Button size="lg" variant="secondary" className="text-primary font-medium text-lg px-8 py-6">
                  Start Building Now
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
