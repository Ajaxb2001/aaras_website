// Contact.js

import React from "react";
import "../CSS/contact.css"; // Ensure this path is correct

const Contact = () => {
  // Form data state

  // JSX for the contact component
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>If you have any questions, please feel free to reach out to us!</p>
      </div>
      <div className="contact-content">
        <div className="contact-card">
          {/* Contact card content (e.g., address, phone number) */}
          <h3>Contact Info</h3>
          <p>Company Name</p>
          <p>HBR Layout,</p>
          <p>Bangalore, Karnataka, 560043</p>
          <p>Phone: 9527659939</p>
          <p>Email: 2024aaras@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
