import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("App component mounted successfully");
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>At First Site Beauty</h1>
      <p>App is loading successfully!</p>
      <p>Test version - working on fixing the full site.</p>
    </div>
  );
}

export default App;