import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import navImage from "../assets/navbarLogo.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Perform any additional logout logic here
    
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={navImage} alt="HSI Logo" className="navbar-logo" />
      </div>

      <div className="navbar-actions">
      <button className="logout-button" onClick={handleLogout}>
  Logout <span className="icon">→</span>
</button>
      </div>
    </nav>
  );
}

export default Navbar;
