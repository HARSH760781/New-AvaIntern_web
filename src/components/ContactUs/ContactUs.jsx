import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    domain: "",
    mobile: "",
  });

  const [status, setStatus] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Track the currently open FAQ index

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:8000/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          mobile: "",
          domain: "",
        });
      } else {
        setStatus("Failed to send message: " + result.message);
      }
    } catch (error) {
      setStatus("Failed to send message.");
      console.error("Error:", error);
    }
  };

  const toggleFAQ = (index) => {
    // If the clicked FAQ is already open, close it. Otherwise, open the clicked FAQ.
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2 className="contact-header">Get in Touch</motion.h2>

      <div className="contact-content">
        {/* Contact Info Section */}
        <motion.div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>support@avaintern.com</p>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <p>+91 9606670754</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>Banglore, Neraluru SMS complex 1st floor, Karnataka, 562107</p>
          </div>
          <div className="social-media">
            <h3>Connect with Us</h3>
            <div className="social-icons">
              <a
                href="https://instagram.com/ava_intern"
                className="social-link"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/ava-intern/"
                className="social-link"
              >
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Your Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="domain"
            placeholder="Interested Domain"
            value={formData.domain}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <motion.button type="submit" whileHover={{ scale: 1.05 }}>
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {status && <p className="status-message">{status}</p>}

      {/* FAQ Section */}
      <motion.div
        className="faq-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>Frequently Asked Questions</h3>
        {[
          {
            question: "What are the prerequisites for the programs?",
            answer:
              "There are no prerequisites required, as it is beginner friendly. The curiosity to learn and Forte in your career is required. Rest leave it to us!",
          },
          {
            question: "What is the duration of the programs?",
            answer:
              "The duration varies depending on the program. Please check the specific program details for more information.",
          },
          {
            question: "Who will I be mentored by?",
            answer:
              "You will be mentored by industry experts with extensive experience in their respective fields.",
          },
          {
            question: "What are all the requirements to attend the sessions?",
            answer:
              "You need a stable internet connection and a device to attend the sessions. Specific requirements may vary by program.",
          },
          {
            question: "What if I miss the classes?",
            answer:
              "Recorded sessions will be available for you to catch up on any missed classes.",
          },
        ].map((faq, index) => (
          <div
            className="faq-item"
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <strong>{faq.question}</strong>
              <FaChevronDown
                className={`faq-icon ${openFaqIndex === index ? "open" : ""}`}
              />
            </div>
            <motion.p
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openFaqIndex === index ? "auto" : 0,
                opacity: openFaqIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              {faq.answer}
            </motion.p>
          </div>
        ))}
      </motion.div>

      {/* Google Map Section */}
      <motion.div
        className="map-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0720698772296!2d77.6807824!3d12.8380349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6a3a3c3a5f67%3A0x6a8f5a5b5b5b5b5b!2sNeraluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1634368357327"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
