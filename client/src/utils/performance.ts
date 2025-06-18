// Performance utilities for mobile optimization

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export const isMobile = () => window.innerWidth <= 768;

export const prefersReducedMotion = () => 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = async (images: string[]): Promise<void> => {
  const promises = images.map(preloadImage);
  try {
    await Promise.all(promises);
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

export const optimizeTouch = () => {
  // Add passive listeners for better scroll performance
  const passiveEvents = ['touchstart', 'touchmove', 'wheel'];
  passiveEvents.forEach(event => {
    document.addEventListener(event, () => {}, { passive: true });
  });
};

export const enableGPUAcceleration = (element: HTMLElement) => {
  element.style.willChange = 'transform';
  element.style.transform = 'translateZ(0)';
};