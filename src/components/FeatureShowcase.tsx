
import React from "react";
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
  return (
    <div className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
          reverse && "lg:flex-row-reverse"
        )}>
          <ScrollReveal className={cn(reverse ? "lg:order-2" : "")}>
            <div className="space-y-6 max-w-xl relative">
              {/* Decorative elements */}
              <div className="absolute -left-8 -top-8 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-xl"></div>
              <div className="absolute -right-8 -bottom-8 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-xl"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text relative">
                {title}
                <div className="absolute -bottom-2 left-0 h-0.5 w-20 bg-gradient-to-r from-primary to-transparent"></div>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
              <div className="pt-4">
                {children}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1} className={cn("relative", reverse ? "lg:order-1" : "")}>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-700 hover:-translate-y-2 group">
              {/* Futuristic frame */}
              <div className="absolute inset-0 border-2 border-primary/10 rounded-lg z-30 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-md z-30"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-md z-30"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-md z-30"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-md z-30"></div>
              
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover action indicator */}
              <div className="absolute bottom-4 right-4 bg-primary/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Glow effect */}
            <div 
              className={cn(
                "absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform translate-x-4 translate-y-4 -z-10 blur-md transition-all duration-700 group-hover:blur-xl group-hover:opacity-70",
                glowColor === "blue" && "from-blue-500/20 to-sky-500/20",
                glowColor === "purple" && "from-purple-500/20 to-violet-500/20",
                glowColor === "green" && "from-green-500/20 to-emerald-500/20"
              )}
            ></div>
            
            {/* Tech pattern background */}
            <div className="absolute inset-0 transform translate-x-8 translate-y-8 -z-20 opacity-5">
              <div className="w-full h-full grid grid-cols-8 grid-rows-8">
                {Array(64).fill(0).map((_, i) => (
                  <div key={i} className="border border-primary/30"></div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
