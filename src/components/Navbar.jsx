import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import BookLeaf from "./BookLeaf.jpg";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    // Listen for manual login/logout
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage")); // Notify components
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={BookLeaf} alt="BookLeaf Logo" className="logo" />
        <span className="brand-name">BookLeaf</span>
      </div>

      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lend">Lending</Link></li>
            <li><Link to="/history">Book History</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
           <li><Link to="/">Home</Link></li>

            {/* <li><Link to="/Home"></Link>Home</li> */}
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
