import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaChevronDown,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";
import usePageTitle from "../Hooks/usePageTitle";
import "./ContactUs.css";

const ContactUs = () => {
  usePageTitle();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    domain: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false); // State for loading spinner
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Track the currently open FAQ index

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner

    try {
      const response = await fetch(`${backend_url}/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.result === "success") {
        toast.success(
          <div>
            <FaCheckCircle style={{ marginRight: "10px" }} />{" "}
            {/* Success icon */}
            Message sent successfully!
          </div>,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: { background: "#4caf50", color: "white" },
          }
        );

        setFormData({
          name: "",
          email: "",
          message: "",
          mobile: "",
          domain: "",
        });
      } else {
        toast.error(
          <div>
            <FaTimesCircle style={{ marginRight: "10px" }} /> {/* Error icon */}
            Failed to send message. Please try again later.
          </div>,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: { background: "#f44336", color: "white" },
          }
        );
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: { background: "#f44336", color: "white" }, // Custom error style
      });
      console.error("Error:", error);
    } finally {
      setLoading(false); // Hide loading spinner
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
          {/* Name */}
          {/* Name */}
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Your Name</label>
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Your Email</label>
          </div>

          {/* Mobile */}
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              id="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
            />
            <label htmlFor="mobile">Your Mobile</label>
          </div>

          {/* Domain */}
          <div className="form-group">
            <input
              type="text"
              name="domain"
              id="domain"
              required
              value={formData.domain}
              onChange={handleChange}
            />
            <label htmlFor="domain">Interested Domain</label>
          </div>

          {/* Message */}
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <label htmlFor="message">Your Message</label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            disabled={loading}
          >
            {loading ? (
              <ClipLoader size={20} color="#ffffff" />
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ borderRadius: "8px", fontFamily: "Arial, sans-serif" }}
      />
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
