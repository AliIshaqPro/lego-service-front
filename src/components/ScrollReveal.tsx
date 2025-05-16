
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // 1, 2, 3, or 4 for different delays
  className?: string;
  effect?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "flip-up";
  duration?: number; // Animation duration in ms
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  className = "",
  effect = "fade-up",
  duration = 800
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const getEffectClass = () => {
    switch (effect) {
      case "fade-up":
        return "reveal-fade-up";
      case "fade-down":
        return "reveal-fade-down";
      case "fade-left":
        return "reveal-fade-left";
      case "fade-right":
        return "reveal-fade-right";
      case "zoom-in":
        return "reveal-zoom-in";
      case "flip-up":
        return "reveal-flip-up";
      default:
        return "reveal-fade-up";
    }
  };

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";
  const effectClass = getEffectClass();
  
  // Add custom duration style
  const customDuration = duration !== 800 ? { "--reveal-duration": `${duration}ms` } as React.CSSProperties : {};

  return (
    <div 
      ref={elementRef} 
      className={`reveal ${effectClass} ${delayClass} ${className}`}
      style={customDuration}
      data-aos={effect.replace("-", ":" )}
      data-aos-delay={delay * 100}
      data-aos-duration={duration}
    >
      {children}
    </div>
  );
}
