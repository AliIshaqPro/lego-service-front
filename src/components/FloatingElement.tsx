
import React from "react";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
}

export default function FloatingElement({ 
  children, 
  className = "" 
}: FloatingElementProps) {
  return (
    <div className={`animate-float ${className}`}>
      {children}
    </div>
  );
}
