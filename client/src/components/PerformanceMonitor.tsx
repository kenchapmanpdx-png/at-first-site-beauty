
import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Report Core Web Vitals
    const reportWebVitals = () => {
      if ('web-vital' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    };

    // Report after page load
    if (document.readyState === 'complete') {
      reportWebVitals();
    } else {
      window.addEventListener('load', reportWebVitals);
    }

    return () => window.removeEventListener('load', reportWebVitals);
  }, []);

  return null;
}
