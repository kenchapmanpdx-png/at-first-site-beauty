import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import TeethWhitening from "@/pages/teeth-whitening";
import SprayTanning from "@/pages/spray-tanning";
import BridalDesignSession from "@/pages/bridal-design-session";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/teeth-whitening" component={TeethWhitening} />
      <Route path="/spray-tanning" component={SprayTanning} />
      <Route path="/bridal-design-session" component={BridalDesignSession} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
