import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AarasKitchen from "./components/AarasKitchen"; // Import the Footer component
import logo from "./images/aaras-logo.png"; // Import your logo here
import "./App.css"; // Ensure you are importing App.css

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          {/* Placeholder for the logo */}
          <li className="nav-logo-container">
            <Link to="/" className="nav-logo">
              <img src={logo} alt="Logo" className="nav-logo-image" />{" "}
              {/* Use the imported logo */}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-link">
              Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aaras-kitchen" className="nav-link">
              AarasKitchen
            </Link>
          </li>
        </ul>
      </nav>

      {/* Rest of your components */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aaras-kitchen" element={<AarasKitchen />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
