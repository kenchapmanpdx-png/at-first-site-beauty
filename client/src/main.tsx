import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Immediate app initialization without waiting for DOM
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}

// Initialize AOS after a short delay to ensure React has mounted
setTimeout(async () => {
  try {
    const AOS = await import('aos');
    await import('aos/dist/aos.css');
    
    AOS.default.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 120,
      delay: 100
    });
  } catch (error) {
    console.warn('AOS failed to load, continuing without animations');
  }
}, 100);

// Register service worker for production only
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .catch(() => {
        // Silent fail - don't block app if service worker fails
      });
  });
}