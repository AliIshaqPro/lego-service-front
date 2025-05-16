
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

// Initialize AOS with custom settings for slower animations
AOS.init({
  duration: 2000, // Increased duration for even slower animations
  once: false,    // Whether animation should happen only once
  mirror: true,   // Whether elements should animate out while scrolling past them
  easing: 'ease-out-cubic',
  delay: 200,     // Increased delay
  anchorPlacement: 'top-bottom',
  disable: 'mobile' // Disable on mobile devices for better performance
});

createRoot(document.getElementById("root")!).render(<App />);
