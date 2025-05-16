
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "500+", label: "Projects Completed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "40+", label: "Expert Team Members" },
  { value: "8+", label: "Years of Experience" },
];

export default function StatsSection() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We take pride in the results we deliver for our clients. These numbers 
              reflect our commitment to excellence and innovation.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index}>
              <div className="text-center p-8 rounded-lg bg-card border border-border shadow-lg">
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
