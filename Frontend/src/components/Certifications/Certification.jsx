import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaClipboardCheck,
  FaAward,
  FaUserGraduate,
  FaShareAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import usePageTitle from "../Hooks/usePageTitle";
import {
  Autoplay,
  EffectCoverflow,
  EffectCards,
  Pagination,
} from "swiper/modules";
import "swiper/swiper-bundle.css"; // Swiper styles
import "./CertificationPage.css"; // Custom CSS for styling
import { Link } from "react-router-dom";

const CertificationPage = () => {
  // Dummy data for certificates
  usePageTitle();

  const certificateData = [
    { id: 1, image: "/images/Certificate/1.jpg" },
    { id: 2, image: "/images/Certificate/2.jpg" },
    { id: 3, image: "/images/Certificate/3.jpg" },
    { id: 4, image: "/images/Certificate/4.jpg" },
    { id: 5, image: "/images/Certificate/5.jpg" },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [images, setImages] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      id: 1,
      question: "What courses do you offer?",
      answer:
        "We offer courses in various domains including technology, business, and design.",
    },
    {
      id: 2,
      question: "Is there a certificate after completion?",
      answer:
        "Yes, you receive an industry-recognized certification upon completion.",
    },
    {
      id: 3,
      question: "Are the courses self-paced?",
      answer:
        "Yes,But all courses are available in both mode Live & self paced.",
    },
    {
      id: 4,
      question: "Do you provide job assistance?",
      answer:
        "Yes, we offer career guidance, resume reviews, and job placement support.",
    },
    {
      id: 5,
      question: "How can I enroll?",
      answer:
        "You can enroll by selecting a course on our website and completing the registration process.",
    },
  ];
  const stats = [
    { value: 10000, label: "Certifications Issued" },
    { value: 95, label: "Success Rate" },
    { value: 100, label: "Industry Partners" },
    // { value: 100, label: "Countries Reached" },
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const duration = 1000; // 1 second
      const increment = stat.value / (duration / 20);

      const interval = setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(interval);
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.round(start);
          return newCounts;
        });
      }, 20);
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your API key
      const SHEET_ID = import.meta.env.VITE_SHEET_ID; // Replace with your Google Sheet ID
      const RANGE = "Sheet1!A2:D"; // Adjust the range to match your sheet
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
      // console.log(url);
      try {
        const response = await fetch(url);

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Check if data.values exists
        if (!data.values) {
          throw new Error("No data found in the sheet.");
        }

        // console.log(data.values);
        const imageUrls = data.values.map((row) => row[2]); // Extract image URLs
        const mentorData = data.values.map((row) => row[3]); // Extract image URLs
        const mentorUrls = mentorData.map((item) =>
          item ? item.split(",") : null
        );
        // console.log("men", mentorUrls);

        setImages(imageUrls);
        setMentors(mentorUrls);

        // Fetch data from Certificate sheet
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(mentors);
  return (
    <div className="certification-page">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Your Certifications 🎓</h1>
        <p>
          Validate your skills and showcase your achievements with our
          industry-recognized certifications.
        </p>
      </motion.div>

      {/* Certificate Slider Section */}

      <div className="our_certification">
        <h2 className="section-title">Our Certification </h2>
        <p>
          We partner with colleges to bring cutting-edge educational programs to
          students. Our collaborations focus on skill development, career
          guidance, and hands-on learning experiences.
        </p>

        <Swiper
          loop={true}
          effect="coverflow"
          grabCursor={true}
          autoplay={{
            delay: 2500, // Slide every 2.5 seconds
            disableOnInteraction: false, // Keeps autoplay running
          }}
          breakpoints={{
            1200: { slidesPerView: 3, spaceBetween: 30 }, // Large screens
            768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
            480: { slidesPerView: 1, spaceBetween: 10 }, // Mobile landscape
            0: { slidesPerView: 1, spaceBetween: 5 }, // Mobile portrait
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {images
            .filter((image) => image)
            .map((image, index) => (
              <SwiperSlide key={index}>
                <div className="collab-card-img-container">
                  <img
                    src={image}
                    alt={`Collaboration ${index + 1}`}
                    className="collab-card-img"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Statistics Section */}
      <motion.div
        className="statistics-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <h2 className="section-title">Our Impact in Numbers</h2>
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="statistic-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{counts[index]}+</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Partners Section */}
      <Swiper
        loop={true}
        effect="cards"
        grabCursor={true}
        autoplay={{
          delay: 1500, // Slide every 1.5 seconds
          disableOnInteraction: false, // Keeps autoplay running
        }}
        breakpoints={{
          1200: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          480: { slidesPerView: 1, spaceBetween: 10 },
          0: { slidesPerView: 1, spaceBetween: 5 },
        }}
        cardsEffect={{
          slideShadows: true,
          shadow: true,
          depth: 200, // Depth of the card flip effect
        }}
        pagination={{ clickable: true }}
        modules={[EffectCards, Autoplay, Pagination]} // Ensure the Autoplay module is included
        className="mySwiper1"
      >
        {certificateData.map((certificate, index) => (
          <SwiperSlide key={index}>
            <div className="collab-card-img-container1">
              <img
                src={certificate.image}
                alt={`Certificate ${index + 1}`}
                className="collab-card-img1"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Process Section */}
      <motion.div
        className="process-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h2>How to Earn Your Certification</h2>
        <div className="process-steps">
          <div className="process-step">
            <FaBookOpen className="process-icon" />
            <h3>1. Enroll in a Course</h3>
            <p>
              Select a program that matches your career goals and start learning
              at your own pace.
            </p>
          </div>
          <div className="process-step">
            <FaClipboardCheck className="process-icon" />
            <h3>2. Complete Assessments</h3>
            <p>
              Pass quizzes, assignments, and hands-on projects to validate your
              skills.
            </p>
          </div>
          <div className="process-step">
            <FaUserGraduate className="process-icon" />
            <h3>3. Attend Live Sessions</h3>
            <p>
              Join expert-led live sessions and interact with mentors for deeper
              understanding.
            </p>
          </div>
          <div className="process-step">
            <FaAward className="process-icon" />
            <h3>4. Get Certified</h3>
            <p>
              Receive your industry-recognized certification upon successful
              course completion.
            </p>
          </div>
          <div className="process-step">
            <FaShareAlt className="process-icon" />
            <h3>5. Showcase Your Achievement</h3>
            <p>
              Share your certificate on LinkedIn and add it to your resume for
              better opportunities.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Instructor Section */}
      <motion.div
        className="instructor-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <h2>Meet Our Instructors</h2>
        <div className="instructor-grid">
          {mentors
            .filter((image) => image)
            .map((instructor, index) => (
              <div key={index} className="instructor-card">
                <img
                  src={instructor[0]}
                  alt={instructor[1]}
                  className="instructor-image"
                />
                <h3>{instructor[1]}</h3>
                <p>{instructor[2]}</p>
              </div>
            ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="faq-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-card ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-header">
                <h3>{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="faq-icon" />
                ) : (
                  <FaChevronDown className="faq-icon" />
                )}
              </div>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <h2>Ready to Get Certified?</h2>
        <p>
          Join thousands of learners who have transformed their careers with our
          certifications.
        </p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/courses"
            style={{ color: "white", textDecoration: "none" }}
          >
            Get Certified
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CertificationPage;
