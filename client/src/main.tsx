import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Suppress console errors in production
if (import.meta.env.PROD) {
  console.error = () => {};
  console.warn = () => {};
}

// Handle HMR connection errors in development
if (import.meta.env.DEV && import.meta.hot) {
  import.meta.hot.on('vite:error', (payload) => {
    console.warn('Vite HMR error, attempting reconnection...', payload);
  });
  
  // Add connection retry logic
  let retryCount = 0;
  const maxRetries = 5;
  
  const handleConnectionError = () => {
    if (retryCount < maxRetries) {
      retryCount++;
      console.log(`HMR connection failed, retrying... (${retryCount}/${maxRetries})`);
      setTimeout(() => {
        if (import.meta.hot) {
          import.meta.hot.send('vite:ping');
        }
      }, 1000 * retryCount);
    }
  };
  
  window.addEventListener('error', (event) => {
    if (event.message.includes('network error') || event.message.includes('WebSocket')) {
      handleConnectionError();
    }
  });
}

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 120,
  delay: 100
});

// Register service worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Temporarily test with minimal app
function TestApp() {
  return <div>Test App Working</div>;
}

createRoot(document.getElementById("root")!).render(<TestApp />);