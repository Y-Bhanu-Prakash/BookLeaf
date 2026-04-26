import React, { useState } from "react";
import "./ContactUs.css"; // Ensure you have a CSS file for styling

const ContactUs = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", message);
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Write your message..." onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;