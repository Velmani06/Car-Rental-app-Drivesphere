// src/components/ContactSection.jsx
import React from "react";
import "./Contact.css"; // Keep your CSS if needed

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      name: e.target.name.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    console.log("Form Data:", formData);

    // Show simple popup
    alert("Your message has been submitted successfully!");

    // Reset the form
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-control">
          <label>First Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="form-control">
          <label>Last Name:</label>
          <input
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="form-control">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-control">
          <label>Message:</label>
          <textarea name="message" placeholder="Enter your message" required />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactSection;
