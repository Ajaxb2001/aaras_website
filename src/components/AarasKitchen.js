// src/components/AarasKitchen.js
import React, { useState } from "react";
import "../CSS/AarasKitchen.css"; // Make sure to update the CSS file with card styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import RegistrationForm from "./RegistrationForm"; // Adjust this path if your component is in a different directory
const AarasKitchen = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  return (
    <div className="aaras-kitchen-card">
      <div className="aaras-kitchen">
        <h1>Aaras-Kitchen Catering Services</h1>
        <p>
          Welcome to Aaras Kitchen, your go-to choice for exceptional catering
          services for parties, daycares, and preschools. We offer a variety of
          delicious, nutritious, and freshly prepared meals to suit any
          occasion.
        </p>

        <section className="services">
          <h2>Our Services</h2>
          <div className="service">
            <h3>Parties</h3>
            <p>
              Make your next event memorable with our expertly crafted menus
              tailored to your preferences. From intimate gatherings to large
              celebrations, we provide full-service catering that will delight
              your guests.
            </p>
          </div>
          <div className="service">
            <h3>Day Care & Preschool Catering</h3>
            <p>
              Provide the children in your care with healthy and tasty meals
              designed to fuel their learning and play. Our kid-friendly options
              are both nutritious and appealing to young palates.
            </p>
          </div>
        </section>

        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>
            Interested in our catering services? Get in touch to discuss your
            needs and how we can help make your event a success.
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong> (+91)
            7972898248
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>{" "}
            2024aaras@gmail.com
          </p>
          <button
            onClick={() => setShowRegistrationForm(true)}
            className="contact-button"
          >
            Contact Us
          </button>
          {showRegistrationForm && (
            <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
          )}
        </section>
      </div>
    </div>
  );
};

export default AarasKitchen;
