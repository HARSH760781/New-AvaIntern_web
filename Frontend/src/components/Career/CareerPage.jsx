import React, { useState } from "react";
import { motion } from "framer-motion";
import CourseHeader from "../Course Supporter/Course Header/CourseHeader";
import "./CareerPage.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"; // Import MUI Button
import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import usePageTitle from "../Hooks/usePageTitle";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import { CircularProgress } from "@mui/material"; // Import spinner
import "react-toastify/dist/ReactToastify.css"; // Import styles for Toastify

const CareerPage = () => {
  usePageTitle();
  const [openIndex, setOpenIndex] = useState(null); // Track the open FAQ index
  const [isFormVisible, setIsFormVisible] = useState(false); // Track form visibility
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    domain: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner

    // Simulate form submission (2-second delay)
    setTimeout(() => {
      setLoading(false); // Hide loading spinner
      toast.success("Your application has been submitted successfully!", {
        position: "top-right", // Position of the toast
        autoClose: 3000, // Auto-close after 3 seconds
        hideProgressBar: false, // Show progress bar
        closeOnClick: true, // Close on click
        pauseOnHover: true, // Pause on hover
        draggable: true, // Allow dragging
        style: {
          background: "white", // Green background for success
          color: "black", // White text
          borderRadius: "8px", // Rounded corners
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
          fontSize: "14px", // Font size
          padding: "12px 20px", // Padding
        },
      }); // Show success toast
      setFormData({ name: "", email: "", mobile: "", domain: "", message: "" }); // Clear form data
    }, 2000);
  };

  const careerOptions = [
    {
      title: "Training Programs",
      description: "Learn industry-relevant skills from expert mentors.",
      image: "/images/training.avif",
    },
    {
      title: "Internship Opportunities",
      description: "Gain hands-on experience with real projects.",
      image: "/images/internship.avif",
    },
    {
      title: "Freelance Projects",
      description: "Work on exciting projects and earn as you learn.",
      image: "/images/freelance.avif",
    },
  ];
  const faqs = [
    {
      question: "📌 Who can apply?",
      answer: "Anyone interested in learning and gaining experience.",
    },
    {
      question: "📌 Is there a fee for the training?",
      answer: "Yes, you can go in courses section for more detail.",
    },
    {
      question: "📌 What is the duration of the programs?",
      answer: "Program durations vary, but most are between 4 to 12 weeks.",
    },
    {
      question: "📌 Will I get a certificate after completion?",
      answer: "Yes, you will receive a certificate upon successful completion.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {/* <CourseHeader
        title="Career"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Career" }]}
      /> */}
      <div className="career-page">
        {/* Hero Section */}
        <motion.div
          className="career-hero"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Build Your Future with Us 🚀</h1>
          <p>Join our training, internship, and freelancing programs.</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setIsFormVisible(true); // Show the form
                setIsButtonDisabled(true); // Disable the button
              }}
              disabled={isButtonDisabled} // Disable button when clicked
              sx={{
                my: 2,
                mx: 1,
                py: 1.5,
                font: "100%",
                fontWeight: "bold",
                background: isButtonDisabled ? "#d3d3d3" : "blue",
                color: isButtonDisabled ? "#a9a9a9" : "white",
                "&:hover": {
                  background: isButtonDisabled ? "#d3d3d3" : "blue", // Hover effect when disabled
                  color: isButtonDisabled ? "#a9a9a9" : "white", // Hover effect when disabled
                },
              }}
            >
              Apply Now <FaArrowRight style={{ marginLeft: "8px" }} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Apply Form (This will appear when 'Apply Now' is clicked) */}
        {isFormVisible && (
          <motion.div
            className="apply-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Application Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  title="Please enter your name" // Custom validation message
                />
                <label htmlFor="name">Name*</label>
              </div>

              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  title="Please enter a valid email address" // Custom validation message
                />
                <label htmlFor="email">Email*</label>
              </div>

              <div className="form-field">
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  title="Please enter your mobile number" // Custom validation message
                />
                <label htmlFor="mobile">Mobile*</label>
              </div>

              <div className="form-field">
                <input
                  type="text"
                  name="domain"
                  id="domain"
                  value={formData.domain}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  title="Please enter the domain you're interested in" // Custom validation message
                />
                <label htmlFor="domain">Interested Domain*</label>
              </div>

              <div className="form-field">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  title="Please enter your message" // Custom validation message
                />
                <label htmlFor="message">Message*</label>
              </div>

              <div className="form-field">
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{
                    py: 1.5,
                    fontWeight: "bold",
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "blue",
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} sx={{ color: "white" }} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Toast Container */}
        <ToastContainer />

        {/* Career Opportunities */}
        <motion.div
          className="career-opportunities"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Explore Our Career Opportunities</h2>
          <div className="career-options">
            {careerOptions.map((option, index) => (
              <motion.div
                key={index}
                className="career-card"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={option.image} alt={option.title} />
                <div className="career-content">
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Join Us */}
        <motion.div
          className="why-join"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Why Join Our Programs?</h2>
          <ul>
            <li>✔ Hands-on projects and real-world experience.</li>
            <li>✔ 100% placement assistance for top performers.</li>
            <li>✔ Mentorship from industry professionals.</li>
            <li>✔ Work on cutting-edge technologies.</li>
          </ul>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          className="testimonials"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Success Stories</h2>
          <div className="testimonial-container">
            <motion.div
              className="testimonial-card"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/images/Reviews/Rahul.jpg" alt="Testimonial" />
              <p>"This platform helped me land my first job as a developer!"</p>
              <strong>- Rahul Kumar</strong>
            </motion.div>
            <motion.div
              className="testimonial-card"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/images/Reviews/archana.jpg" alt="Testimonial" />
              <p>"The internship experience here boosted my confidence!"</p>
              <strong>- Archana</strong>
            </motion.div>
          </div>
        </motion.div>

        {/* How to Apply */}
        <motion.div
          className="how-to-apply"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2>How to Apply?</h2>
          <ol>
            <li>📝 Fill out the application form.</li>
            <li>📞 Attend a short interview.</li>
            <li>✅ Get selected and start your journey!</li>
          </ol>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          className="faq-section"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                style={{ cursor: "pointer" }}
              >
                <h3>{faq.question}</h3>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </motion.span>
              </div>
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default CareerPage;
