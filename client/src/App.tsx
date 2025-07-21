import { useEffect } from "react";
import Home from "./pages/home";

function App() {
  useEffect(() => {
    console.log("App component mounted successfully");
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;