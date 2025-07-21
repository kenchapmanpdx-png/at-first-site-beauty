import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Simple app initialization
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Initialize AOS after React renders
document.addEventListener('DOMContentLoaded', async () => {
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
});

// Register service worker for production only
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .catch(() => {
        // Silent fail - don't block app if service worker fails
      });
  });
}