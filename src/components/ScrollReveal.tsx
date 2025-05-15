
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // 1, 2, 3, or 4 for different delays
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  className = ""
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
      { threshold: 0.1 }
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

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <div ref={elementRef} className={`reveal ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
