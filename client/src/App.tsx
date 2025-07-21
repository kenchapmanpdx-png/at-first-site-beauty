import { useEffect } from "react";

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
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#ad3b68', marginBottom: '20px' }}>At First Site Beauty</h1>
      <p style={{ fontSize: '18px', color: '#333' }}>✅ App is loading successfully!</p>
      <p style={{ fontSize: '16px', color: '#666' }}>React is now working properly. Ready to restore the full site.</p>
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#4f46e5' }}>Loading Issue Fixed!</h3>
        <p>The React app is now mounting correctly. The previous loading screen issue has been resolved.</p>
      </div>
    </div>
  );
}

export default App;