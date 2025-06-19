import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { optimizeTouch, preloadCriticalImages } from "./utils/performance";
import Preloader from "@/components/Preloader";
import Home from "./pages/home";
import BridalDesignSession from "./pages/bridal-design-session";
import BridalParty from "./pages/bridal-party";
import SprayTanning from "./pages/spray-tanning";
import TeethWhitening from "./pages/teeth-whitening";
import BookingPage from "./pages/booking-page";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
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
  const [isLoading, setIsLoading] = useState(true);

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
      "/attached_assets/1At First Site Logo (1000 x 350 px)bb_1749329806337_1750282076832.png",
      "/attached_assets/1At First Site Logob (1000 x 350 px)_1750282542411.png",
      "/attached_assets/IMG_0970_1749066905982.png"
    ];

    // Reduce preloader time for faster perceived loading
    preloadCriticalImages(criticalImages).finally(() => {
      setTimeout(() => setIsLoading(false), 500);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;