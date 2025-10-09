import React from "react";

function App() {
  const goToExpress = () => {
    window.location.href = "https://ideal-space-halibut-97qv6r9wjxwgc9vp-3000.app.github.dev/"; // redirect to Express server
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to My App!</h1>
      <button 
        onClick={goToExpress} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Go to App
      </button>
    </div>
  );
}

export default App;
