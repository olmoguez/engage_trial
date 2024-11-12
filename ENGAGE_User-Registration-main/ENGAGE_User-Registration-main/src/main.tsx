import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";

import Homepage from "./components/homepage";

const App = () => {
  const location = useLocation();
 
  const isSignupStatusPage = location.pathname === "/signupstatus"; // For signup status

  // Define state for active tab in the App component
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className={`app-bg ${isSignupStatusPage ? 'signup-bg' : ''}`}>
      {/* Conditionally render Navbar and Title */}
      {location.pathname !== "/homepage" && (
        <>
          <Navbar />
  
          
        </>
      )}
      
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Default route to Homepage */}
        <Route path="/homepage" element={<Homepage />} /> {/* Route for /homepage */}
      </Routes>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
