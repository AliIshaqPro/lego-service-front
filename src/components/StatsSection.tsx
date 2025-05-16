
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { CheckCircle, ArrowUpRight, Users, Award, Calendar, Code } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  { value: "500+", label: "Projects Completed", icon: <Code className="w-6 h-6 text-primary" /> },
  { value: "95%", label: "Client Satisfaction", icon: <Award className="w-6 h-6 text-primary" /> },
  { value: "40+", label: "Expert Team Members", icon: <Users className="w-6 h-6 text-primary" /> },
  { value: "8+", label: "Years of Experience", icon: <Calendar className="w-6 h-6 text-primary" /> },
];

export default function StatsSection() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full grid grid-cols-12 grid-rows-6">
            {Array(72).fill(0).map((_, i) => (
              <div key={i} className="border border-primary/20"></div>
            ))}
          </div>
        </div>
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
            <div className="mt-8 max-w-xs mx-auto">
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="h-0.5 w-3/4 mx-auto mt-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              <div className="h-0.5 w-1/2 mx-auto mt-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index}>
              <div className="text-center p-8 rounded-lg bg-card border border-border shadow-lg relative group overflow-hidden">
                {/* Tech corner */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 -rotate-45 transform origin-top-right"></div>
                  <ArrowUpRight className="absolute top-2 right-2 w-4 h-4 text-primary/70" />
                </div>
                
                {/* Animated bottom border */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-700"></div>
                
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
