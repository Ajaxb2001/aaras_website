// src/components/RegistrationForm.js
import React from "react";
import "../CSS/RegistraionForm.css"; // Make sure to update the CSS file with card styles

const RegistrationForm = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value, // Assuming the first input is for the name
      email: event.target[1].value, // Assuming the second input is for the email
      phone: event.target[2].value, // Assuming the third input is for the phone
      message: event.target[3].value, // Assuming the fourth input is for the message
    };

    // Send the form data to the backend
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        onClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="registration-form-container">
      <div className="registration-form-modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2 className="callback">Get a Call Back from us 😉</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <textarea placeholder="Message" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
