import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("main.tsx: Starting React app initialization");

// Immediate app initialization
const rootElement = document.getElementById("root");
if (rootElement) {
  console.log("main.tsx: Root element found, creating React root");
  const root = createRoot(rootElement);
  console.log("main.tsx: Rendering App component");
  root.render(<App />);
  console.log("main.tsx: App component rendered successfully");
} else {
  console.error("main.tsx: Root element not found");
}