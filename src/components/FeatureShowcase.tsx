
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  children?: React.ReactNode;
  glowColor?: string;
}

export default function FeatureShowcase({
  title,
  description,
  image,
  reverse = false,
  children,
  glowColor = "primary"
}: FeatureProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
          reverse && "lg:flex-row-reverse"
        )}>
          <ScrollReveal className={cn(reverse ? "lg:order-2" : "")} duration={1200}>
            <div className="space-y-6 max-w-xl relative">
              {/* Decorative elements */}
              <div className="absolute -left-8 -top-8 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-xl"></div>
              <div className="absolute -right-8 -bottom-8 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-xl"></div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight gradient-text relative">
                {title}
                <div className="absolute -bottom-3 left-0 h-0.5 w-24 bg-gradient-to-r from-primary to-transparent"></div>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
              <div className="pt-8">
                {children}
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute -right-4 top-1/4 h-20 w-1 bg-gradient-to-b from-primary/30 to-transparent"></div>
              <div className="absolute -left-4 bottom-1/3 h-1 w-16 bg-gradient-to-r from-accent/30 to-transparent"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal 
            delay={1} 
            className={cn("relative", reverse ? "lg:order-1" : "")}
            duration={1200}
          >
            <div 
              className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-700 hover:-translate-y-2 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Futuristic frame */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-lg z-30 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none"></div>
              
              {/* Digital scanline effect */}
              {isHovered && (
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    {Array(20).fill(0).map((_, i) => (
                      <div 
                        key={i} 
                        className="w-full h-1 bg-primary/80"
                        style={{
                          position: 'absolute',
                          top: `${(i * 8) % 100}%`,
                          animation: `scanline ${2 + (i % 3)}s linear infinite`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-md z-30"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-md z-30"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-md z-30"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-md z-30"></div>
              
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover action indicator */}
              <div className="absolute bottom-6 right-6 bg-primary/80 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 animate-pulse-scale">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              
              {/* Info overlay on hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-black/80 via-black/60 to-transparent z-20">
                <div className="text-white font-bold text-lg">{title}</div>
                <div className="text-white/80 text-sm truncate">{description}</div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div 
              className={cn(
                "absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform translate-x-4 translate-y-4 -z-10 blur-lg transition-all duration-700 group-hover:blur-xl group-hover:opacity-70",
                glowColor === "blue" && "from-blue-500/30 to-sky-500/30",
                glowColor === "purple" && "from-purple-500/30 to-violet-500/30",
                glowColor === "premium" && "from-amber-500/30 to-amber-300/30"
              )}
            ></div>
            
            {/* Tech pattern background */}
            <div className="absolute inset-0 transform translate-x-12 translate-y-12 -z-20 opacity-5 bg-hex-pattern"></div>
            
            {/* Floating elements */}
            <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full border border-accent/30 animate-float"></div>
            <div className="absolute -left-6 -top-6 w-12 h-12 rounded-full border border-primary/30 animate-float" style={{ animationDelay: '1s' }}></div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
