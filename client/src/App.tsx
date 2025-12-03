import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { optimizeTouch, preloadCriticalImages } from "./utils/performance";
import Home from "./pages/home";
import BridalDesignSession from "./pages/bridal-design-session";
import BridalParty from "./pages/bridal-party";
import SprayTanning from "./pages/spray-tanning";
import TeethWhitening from "./pages/teeth-whitening";
import BookingPage from "./pages/booking-page";
import NotFound from "./pages/not-found";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={() => <Home scrollToAbout={true} />} />
      <Route path="/services" component={() => <Home scrollToServices={true} />} />
      <Route path="/teeth-whitening" component={TeethWhitening} />
      <Route path="/spray-tanning" component={SprayTanning} />
      <Route path="/bridal-design-session" component={BridalDesignSession} />
      <Route path="/bridal-party" component={BridalParty} />
      <Route path="/book" component={BookingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Initialize performance optimizations
    optimizeTouch();

    // Performance monitoring
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
      });
    }

    // Preload critical images for faster loading
    const criticalImages = [
      '/attached_assets/webp/1At First Site Logo (1000 x 350 px).webp',
'/attached_assets/webp/IMG_0970_1749066905982.webp',
    ];

    preloadCriticalImages(criticalImages);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
        <PerformanceMonitor />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;