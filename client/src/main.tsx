// Async imports to prevent render blocking
const initializeApp = async () => {
  // Dynamic imports for non-critical modules
  const [
    { createRoot },
    { default: App },
    { default: AOS }
  ] = await Promise.all([
    import("react-dom/client"),
    import("./App"),
    import('aos')
  ]);

  // Load CSS asynchronously
  await Promise.all([
    import("./index.css"),
    import('aos/dist/aos.css')
  ]);

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

// Initialize AOS with performance optimization
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    delay: 50,
    disable: window.innerWidth < 768 // Disable on mobile for performance
  });

  // Register service worker for caching
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered successfully');
    } catch (error) {
      console.log('SW registration failed');
    }
  }

  // Render the app
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}