import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "9606670754"; // Replace with your support number

  // Predefined chatbot-like questions
  const questions = [
    "I need help with course enrollment",
    "I have a payment-related issue",
    "I want to know about certification",
    "Can I get a demo session?",
    "Talk to a support agent",
  ];

  const handleSendMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="whatsapp-container">
      {/* Floating WhatsApp Button */}
      <button className="whatsapp-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={30} /> : <FaWhatsapp size={30} />}
      </button>

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="whatsapp-chatbox">
          <p className="chat-header">💬 How can we assist you?</p>
          <ul>
            {questions.map((q, index) => (
              <li key={index} onClick={() => handleSendMessage(q)}>
                {q}
              </li>
            ))}
          </ul>
          <button className="close-chat" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
