import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArrowNavigation from "./components/ArrowNavigation"; // Added navigation arrow
import SearchBar from "./components/SearchBar";


// Importing Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import LendABook from "./pages/LendABook";
import BookHistory from "./pages/BookHistory";
import Profile from "./pages/profile.jsx";
import ContactUs from "./pages/ContactUs";

// Importing Styles
import "./App.css"; // Ensure global styles are applied

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/lend" element={<LendABook />} />
            <Route path="/history" element={<BookHistory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <ArrowNavigation /> {/* Added back navigation button */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;