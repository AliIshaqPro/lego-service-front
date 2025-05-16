
import React from "react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export default function FeatureShowcase({
  title,
  description,
  image,
  reverse = false,
  children
}: FeatureProps) {
  return (
    <div className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
          reverse && "lg:flex-row-reverse"
        )}>
          <ScrollReveal className={cn(reverse ? "lg:order-2" : "")}>
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
              {children}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1} className={cn("relative", reverse ? "lg:order-1" : "")}>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
