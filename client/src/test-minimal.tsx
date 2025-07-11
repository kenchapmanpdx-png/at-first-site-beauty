import { createRoot } from "react-dom/client";

function SimpleApp() {
  return <div>Test App Working</div>;
}

createRoot(document.getElementById("root")!).render(<SimpleApp />);