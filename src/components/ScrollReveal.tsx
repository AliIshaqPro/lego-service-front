
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // 1, 2, 3, or 4 for different delays
  className?: string;
  effect?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "flip-up";
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  className = "",
  effect = "fade-up"
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

  return (
    <div ref={elementRef} className={`reveal ${effectClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
