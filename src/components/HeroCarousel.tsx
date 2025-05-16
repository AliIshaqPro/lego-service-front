
import React, { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRouter } from "@/lib/use-router";
import { type CarouselApi } from "embla-carousel-react";

interface CarouselSlide {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaLink: string;
  ctaText: string;
  overlayEffect?: "circuit" | "grid" | "particles" | "none";
}

const slides: CarouselSlide[] = [
  {
    title: "Build Your Digital Future",
    subtitle: "Create custom service packages with our dynamic Lego-style builder",
    backgroundImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    ctaLink: "/builder",
    ctaText: "Start Building",
    overlayEffect: "circuit",
  },
  {
    title: "Cutting-Edge Digital Solutions",
    subtitle: "From web development to digital marketing - everything in one place",
    backgroundImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    ctaLink: "/services",
    ctaText: "Explore Services",
    overlayEffect: "grid",
  },
  {
    title: "Enterprise-Ready Technology",
    subtitle: "Future-proof your business with our scalable digital platform",
    backgroundImage: "https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?q=80&w=2070&auto=format&fit=crop",
    ctaLink: "/builder",
    ctaText: "Get Started",
    overlayEffect: "particles",
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        api?.scrollNext();
        setIsAnimating(false);
      }, 500); // Half the transition time for a smooth effect
    }, 8000); // Change slide every 8 seconds
    
    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel 
        opts={{
          loop: true,
          align: "center",
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="min-w-full">
              <div 
                className="relative h-[90vh] flex items-center justify-center overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Futuristic overlay effects */}
                {slide.overlayEffect === "circuit" && (
                  <div className="absolute inset-0 z-[1] bg-circuit-pattern opacity-30"></div>
                )}
                
                {slide.overlayEffect === "grid" && (
                  <div className="absolute inset-0 z-[1]">
                    <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-20">
                      {Array(48).fill(0).map((_, i) => (
                        <div key={i} className="border border-white/40 backdrop-blur-sm rounded-md h-32"></div>
                      ))}
                    </div>
                  </div>
                )}
                
                {slide.overlayEffect === "particles" && (
                  <div className="absolute inset-0 z-[1]">
                    {Array(50).fill(0).map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute rounded-full bg-white/40 animate-pulse" 
                        style={{
                          width: `${Math.random() * 15 + 3}px`,
                          height: `${Math.random() * 15 + 3}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDuration: `${Math.random() * 8 + 2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}

                {/* Digital lines animation */}
                <div className="absolute inset-0 z-[1]">
                  {Array(20).fill(0).map((_, i) => (
                    <div 
                      key={`line-${i}`} 
                      className="absolute bg-primary/30 animate-pulse" 
                      style={{
                        height: i % 2 === 0 ? '100%' : '1px',
                        width: i % 2 === 0 ? '1px' : '100%',
                        top: i % 2 === 0 ? '0' : `${(i * 25) % 100}%`,
                        left: i % 2 === 0 ? `${(i * 15) % 100}%` : '0',
                        opacity: 0.5,
                        animationDuration: `${5 + i}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Main content */}
                <div 
                  className="container mx-auto px-4 relative z-10 text-center"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay={index * 200}
                >
                  <div className="max-w-4xl mx-auto">
                    <h1 
                      className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
                      data-aos="zoom-in" 
                      data-aos-duration="1000" 
                      data-aos-delay={(index * 200) + 300}
                    >
                      {slide.title}
                    </h1>
                    <p 
                      className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
                      data-aos="fade-up" 
                      data-aos-duration="1000" 
                      data-aos-delay={(index * 200) + 600}
                    >
                      {slide.subtitle}
                    </p>
                    <Link 
                      to={slide.ctaLink}
                      data-aos="fade-up" 
                      data-aos-duration="1000" 
                      data-aos-delay={(index * 200) + 900}
                    >
                      <Button 
                        size="lg" 
                        className="text-lg px-8 py-6 interactive-button transition-all duration-700 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                      >
                        {slide.ctaText}
                        <ArrowUpRight className="ml-2 h-5 w-5 animate-pulse" />
                      </Button>
                    </Link>

                    {/* Futuristic decorative elements */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4">
                      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                      <div className="h-0.5 mt-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
                    </div>
                  </div>
                </div>

                {/* Tech circuit decorative corners */}
                <div className="absolute top-16 left-16 w-40 h-40 border-l-2 border-t-2 border-white/30 rounded-tl-lg animate-pulse" style={{animationDuration: '4s'}}></div>
                <div className="absolute top-16 right-16 w-40 h-40 border-r-2 border-t-2 border-white/30 rounded-tr-lg animate-pulse" style={{animationDuration: '5s'}}></div>
                <div className="absolute bottom-16 left-16 w-40 h-40 border-l-2 border-b-2 border-white/30 rounded-bl-lg animate-pulse" style={{animationDuration: '6s'}}></div>
                <div className="absolute bottom-16 right-16 w-40 h-40 border-r-2 border-b-2 border-white/30 rounded-br-lg animate-pulse" style={{animationDuration: '7s'}}></div>
                
                {/* Additional futuristic elements */}
                <div className="absolute bottom-10 left-10 h-20 w-20 border border-primary/50 rounded-full flex items-center justify-center">
                  <div className="h-14 w-14 border border-accent/50 rounded-full flex items-center justify-center animate-spin-slow">
                    <div className="h-8 w-8 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="absolute top-10 right-10 h-20 w-20 border border-accent/50 rounded-full flex items-center justify-center">
                  <div className="h-14 w-14 border border-primary/50 rounded-full flex items-center justify-center animate-spin-slow" style={{animationDirection: 'reverse'}}>
                    <div className="h-8 w-8 bg-accent/20 rounded-full animate-pulse"></div>
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
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-500",
                currentIndex === index 
                  ? "bg-white shadow-lg shadow-white/20 w-8" 
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
        <CarouselPrevious className="absolute left-8 top-1/2 z-10 h-12 w-12 rounded-full bg-background/30 backdrop-blur-sm hover:bg-primary border-none shadow-lg shadow-black/10" />
        <CarouselNext className="absolute right-8 top-1/2 z-10 h-12 w-12 rounded-full bg-background/30 backdrop-blur-sm hover:bg-primary border-none shadow-lg shadow-black/10" />
      </Carousel>
    </div>
  );
}
