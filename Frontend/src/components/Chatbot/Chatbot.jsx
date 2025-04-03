import React, { useState, useEffect, useRef } from "react";
import {
  FaTimes,
  FaRobot,
  FaRegCommentDots,
  FaPhoneAlt,
  FaInfoCircle,
  FaBook,
  FaCertificate,
  FaMoneyBillWave,
} from "react-icons/fa";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [showCourses, setShowCourses] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHistory([
        {
          text: "👋 Hi there! I’m **EduBot**, your AI-powered learning assistant.",
          sender: "bot",
        },
        { text: "How can I assist you today?", sender: "bot" },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    // **Auto-scroll to the latest selection**
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleOptionClick = (option) => {
    if (history.some((msg) => msg.text === option.text)) return; // Prevent duplicate selections

    setHistory((prev) => [...prev, { text: option.text, sender: "user" }]);

    if (option.text === "📞 Contact Support") {
      setHistory((prev) => [
        ...prev,
        { text: "🔄 Connecting to support...", sender: "bot" },
      ]);
      setTimeout(() => window.open("https://wa.me/9606670754", "_blank"), 2000);
      return;
    }

    if (option.text === "📚 Available Courses") {
      setShowCourses(true);
      return;
    }

    setShowCourses(false);
    setHistory((prev) => [...prev, { text: option.response, sender: "bot" }]);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={25} /> : <FaRegCommentDots size={25} />}
      </button>

      {isOpen && (
        <div className="chatbox">
          <div className="chat-header">
            <FaRobot /> <span>EduBot - AI Assistant</span>
          </div>
          <div className="chat-body" ref={chatBodyRef}>
            {history.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {showCourses && (
              <div className="chat-message bot">
                <strong>📚 Our Available Courses:</strong>
                <ul>
                  <li>💻 Full Stack Development</li>
                  <li>📱 App Development</li>
                  <li>🤖 Machine Learning (ML)</li>
                  <li>🧠 Artificial Intelligence (AI)</li>
                  <li>☕ Java Programming</li>
                  <li>🔬 VLSI Design</li>
                  <li>🔩 Embedded Systems</li>
                  <li>📊 Data Science</li>
                  <li>📈 Digital Marketing</li>
                  <li>🎨 UI/UX Design</li>
                  <li>🛠️ Software Testing</li>
                  <li>📐 AutoCAD</li>
                  <li>📊 Data Analytics</li>
                  <li>☁️ Cloud Computing</li>
                  <li>🌍 Internet of Things (IoT)</li>
                  <li>📉 Business Analytics</li>
                  <li>⚙️ DevOps</li>
                </ul>
                <span>Need more details? Feel free to ask! 😊</span>
              </div>
            )}

            <div className="chat-options">
              {options.map((option, index) => (
                <button
                  key={index}
                  className={`chat-option ${option.className}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.icon} {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Options list
const options = [
  {
    text: "🤖 About EduBot",
    response:
      "I'm **EduBot**, your AI assistant! I can guide you through courses, FAQs, certification, and support options.",
    // icon: <FaInfoCircle />,
    className: "about",
  },
  {
    text: "🎓 Certification",
    response:
      "Yes! 🎓 We provide **certificates upon course completion**. You can download it from your dashboard or contact support for assistance.",
    // icon: <FaCertificate />,
    className: "certification",
  },
  {
    text: "💳 Payment Queries",
    response:
      "If you've made a payment but haven't received confirmation, check your email. If the issue persists, please contact our support team.",
    // icon: <FaMoneyBillWave />,
    className: "payment",
  },
  {
    text: "📞 Contact Support",
    response: "🔄 Connecting to support...",
    // icon: <FaPhoneAlt />,
    className: "contact",
  },
];

export default ChatBot;
