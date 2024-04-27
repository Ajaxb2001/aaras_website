// Contact.js

import React, { useState } from "react";
import "../CSS/contact.css"; // Ensure this path is correct

const Contact = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    try {
      // Submit form data to the backend API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setSubmissionStatus("Message sent successfully!");
      } else {
        setSubmissionStatus(
          data.message || "There was an error submitting the form."
        );
      }
    } catch (error) {
      setSubmissionStatus(
        error.message || "There was an error submitting the form."
      );
    }
    setIsSubmitting(false);
  };

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
        <div className="contact-form">
          <h3>Do Contact Us ✌️</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
            <button
              type="submit"
              className="form-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {submissionStatus && (
            <p className="form-status">{submissionStatus}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
