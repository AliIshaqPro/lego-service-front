
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CarouselSlide {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaLink: string;
  ctaText: string;
}

const slides: CarouselSlide[] = [
  {
    title: "Build Your Digital Future",
    subtitle: "Create custom service packages with our dynamic Lego-style builder",
    backgroundImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop",
    ctaLink: "/builder",
    ctaText: "Start Building",
  },
  {
    title: "Cutting-Edge Digital Solutions",
    subtitle: "From web development to digital marketing - everything in one place",
    backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    ctaLink: "/services",
    ctaText: "Explore Services",
  },
  {
    title: "Enterprise-Ready Technology",
    subtitle: "Future-proof your business with our scalable digital platform",
    backgroundImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
    ctaLink: "/builder",
    ctaText: "Get Started",
  }
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full overflow-hidden">
      <Carousel 
        opts={{
          loop: true,
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="min-w-full">
              <div 
                className="relative h-[90vh] flex items-center justify-center overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.4)), url(${slide.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div 
                  className="container mx-auto px-4 relative z-10 text-center"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={index * 100}
                >
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                      {slide.subtitle}
                    </p>
                    <Link to={slide.ctaLink}>
                      <Button size="lg" className="text-lg px-8 py-6 transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
                        {slide.ctaText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-10 flex justify-center gap-2 z-50">
          {slides.map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-white/50 transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <CarouselPrevious className="absolute left-4 top-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 z-10" />
      </Carousel>
    </div>
  );
}
