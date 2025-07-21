import { useEffect } from "react";
import { Route, Switch } from "wouter";
import Home from "./pages/home";
import BookingPage from "./pages/booking-page";
import BridalDesignSession from "./pages/bridal-design-session";
import BridalParty from "./pages/bridal-party";
import SprayTanning from "./pages/spray-tanning";
import TeethWhitening from "./pages/teeth-whitening";
import NotFound from "./pages/not-found";

function App() {
  console.log("App: Component function called");
  
  useEffect(() => {
    console.log("App: useEffect running - component mounted successfully");
    // Remove loading screen
    const loadingEl = document.querySelector('.loading');
    if (loadingEl) {
      loadingEl.remove();
      console.log("App: Loading screen removed");
    }
  }, []);

  console.log("App: About to render JSX");
  
  return (
    <Switch>
      <Route path="/">
        {() => <Home />}
      </Route>
      <Route path="/book">
        {() => <BookingPage />}
      </Route>
      <Route path="/bridal-design-session">
        {() => <BridalDesignSession />}
      </Route>
      <Route path="/bridal-party">
        {() => <BridalParty />}
      </Route>
      <Route path="/spray-tanning">
        {() => <SprayTanning />}
      </Route>
      <Route path="/teeth-whitening">
        {() => <TeethWhitening />}
      </Route>
      <Route>
        {() => <NotFound />}
      </Route>
    </Switch>
  );
}

export default App;