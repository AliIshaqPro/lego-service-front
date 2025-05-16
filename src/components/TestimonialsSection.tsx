
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc.",
    content: "Working with this company transformed our digital presence completely. Their Lego-style service builder allowed us to create exactly what we needed without paying for extras we didn't want.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Solutions",
    content: "The team's attention to detail and understanding of our brand was exceptional. The website they built has increased our conversion rate by 45% in just three months.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "StartUp Innovate",
    content: "As a startup, we needed flexibility and scalability. Their modular approach let us start small and add services as we grew. The dashboard makes tracking projects so simple.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    name: "David Park",
    role: "COO",
    company: "Enterprise Networks",
    content: "We've worked with many digital agencies before, but none provided the level of customization and transparency this team offers. The service builder is genuinely revolutionary.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <div className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've helped businesses of all sizes transform their digital presence. 
              Here's what some of them have to say about working with us.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg h-full glass-effect">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                            size={16} 
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg mb-6 flex-grow">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex items-center mt-auto">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 border-2 border-primary/20" 
                        />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 sm:-left-4" />
            <CarouselNext className="-right-12 sm:-right-4" />
          </Carousel>
        </ScrollReveal>
      </div>
    </div>
  );
}
