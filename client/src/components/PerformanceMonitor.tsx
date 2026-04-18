
import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Basic performance monitoring without web-vitals dependency.
    // Only log in dev — production users don't need to see this in their console.
    const reportPerformance = () => {
      if (!import.meta.env.DEV) return;
      if ('performance' in window && performance.getEntriesByType) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log('Page Load Time:', Math.round(navigation.loadEventEnd - navigation.fetchStart), 'ms');
          console.log('DOM Content Loaded:', Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart), 'ms');
        }
      }
    };

    // Report after page load
    if (document.readyState === 'complete') {
      reportPerformance();
    } else {
      window.addEventListener('load', reportPerformance);
    }

    return () => window.removeEventListener('load', reportPerformance);
  }, []);

  return null;
}
