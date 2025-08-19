import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_otzyr1q",     // 🔹 from EmailJS Email Services
        "template_gptcskg",    // 🔹 from EmailJS Templates
        form.current,
        "IIYc4Cjg-4F1PsOng"      // 🔹 from EmailJS Account → Integration
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, try again!");
        }
      );
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First" required />
          <input type="text" name="lastname" placeholder="Last" required />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows={3} required />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
