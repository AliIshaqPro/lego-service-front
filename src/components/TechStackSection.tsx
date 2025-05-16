
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface TechnologyLogo {
  name: string;
  logo: string;
}

const technologies: TechnologyLogo[] = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
];

export default function TechStackSection() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Powered by Modern Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use cutting-edge technologies to deliver scalable, secure, and high-performance solutions 
              for our clients.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {technologies.map((tech, index) => (
            <ScrollReveal key={tech.name} delay={index % 4}>
              <div className="flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 mb-4 p-2 bg-card rounded-lg shadow-lg flex items-center justify-center">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12" />
                </div>
                <p className="text-center font-medium">{tech.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
