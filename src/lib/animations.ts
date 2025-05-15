
// Helper function to reveal elements on scroll
export function setupScrollRevealListener() {
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

  const elements = document.querySelectorAll(".reveal");
  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
}

// Animation utilities for lego-like blocks
export function animateBlock(element: HTMLElement, delay = 0) {
  element.style.opacity = "0";
  element.style.transform = "scale(0.8)";
  
  setTimeout(() => {
    element.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    element.style.opacity = "1";
    element.style.transform = "scale(1)";
  }, delay);
}

// For interactive elements
export function addHoverEffect(element: HTMLElement) {
  element.addEventListener("mouseenter", () => {
    element.style.transform = "translateY(-2px)";
    element.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
  });
  
  element.addEventListener("mouseleave", () => {
    element.style.transform = "translateY(0)";
    element.style.boxShadow = "";
  });
}
