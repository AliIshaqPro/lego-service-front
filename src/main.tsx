
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

// Initialize AOS with custom settings
AOS.init({
  duration: 1500,
  once: false,
  mirror: true,
  easing: 'ease-out-cubic',
  delay: 100,
  anchorPlacement: 'top-bottom'
});

createRoot(document.getElementById("root")!).render(<App />);
