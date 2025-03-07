import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaBullseye, FaLightbulb, FaCogs } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Pagination,
  EffectCoverflow,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("goal");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.21 });

  const [openIndex, setOpenIndex] = useState(null);
  const [images, setImages] = useState([]);
  const [collabImages, setCollabImages] = useState([]);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your API key
      const SHEET_ID = import.meta.env.VITE_SHEET_ID; // Replace with your Google Sheet ID
      const RANGE = "Sheet1!A2:E"; // Adjust the range to match your sheet
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

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

        const imageUrls = data.values.map((row) => row[0]);
        const collabUrls = data.values.map((row) => row[1]); // Extract image URLs
        const videoUrls = data.values.map((row) => row[4])[0];
        // console.log(videoUrls);
        setImages(imageUrls);
        setCollabImages(collabUrls);
        setVideoData(videoUrls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(collabImages);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const cards = [
    {
      id: 1,
      image: "/images/about/instructor.png",
      title: "Expert Instructors",
      content: "Learn from top industry professionals.",
    },
    {
      id: 2,
      image: "/images/about/intractive learning.png",
      title: "Interactive Learning",
      content: "Hands-on projects for practical knowledge.",
    },
    {
      id: 3,
      image: "/images/about/247 support.png",
      title: "24/7 Support",
      content: "Get instant help from our experts.",
    },
    {
      id: 4,
      image: "/images/about/Affordable price.png",
      title: "Affordable Pricing",
      content: "High-quality courses at reasonable rates.",
    },

    {
      id: 7,
      image: "/images/about/live session.png",
      title: "Live Sessions",
      content: "Attend live classes with experts.",
    },
    {
      id: 8,
      image: "/images/about/placement assistance.png",
      title: "Job Assistance",
      content: "Get career guidance and placement help.",
    },
  ];
  const faqs = [
    {
      question: "📚 What courses do you offer?",
      answer:
        "We offer courses in programming, design, business, AI, data science, and more.",
    },
    {
      question: "🎓 Do I get a certificate after completing a course?",
      answer:
        "Yes! Every course comes with an industry-recognized certificate.",
    },
    {
      question: "⏳ Are the courses self-paced or live?",
      answer:
        "We offer both! Choose between self-paced learning or interactive live sessions.",
    },
    {
      question: "💼 Do you provide job assistance?",
      answer:
        "Absolutely! We offer job placement support, resume building, and interview preparation.",
    },

    {
      question: "💰 What are the payment options?",
      answer:
        "We accept debit/credit cards, UPI, net banking, and EMI options.",
    },
    {
      question: "🔄 Can I get a refund if I'm not satisfied?",
      answer: "No , Our company works on no-refund policy.",
    },
    {
      question: "📅 How often are new courses added?",
      answer:
        "New courses are added every month to keep you updated with industry trends.",
    },
  ];
  const tabContent = {
    goal: {
      title: "Our Goal",
      text: "We aim to revolutionize online learning by providing high-quality, interactive content for students worldwide.",
      icon: <FaBullseye className="tab-icon" />,
    },
    approach: {
      title: "Our Approach",
      text: "We use modern technology, expert mentors, and engaging content to ensure effective learning experiences.",
      icon: <FaLightbulb className="tab-icon" />,
    },
    process: {
      title: "Our Process",
      text: "Our structured courses, real-time projects, and continuous assessment help learners stay ahead.",
      icon: <FaCogs className="tab-icon" />,
    },
  };

  return (
    <>
      {/* <CourseHeader
        title="About"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "About" }]}
      /> */}
      <div className="about-section">
        {/* Left Side - Animated Images */}
        {/* <motion.div
          className="about-left"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="https://via.placeholder.com/400"
            alt="EdTech Learning"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div> */}

        {/* Right Side - Content */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Our Company - Avaintern Edtech
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We provide top-notch educational resources to enhance learning
            experiences, combining innovation and technology.
          </motion.p>

          {/* Tab Menu */}
          <div className="tab-menu">
            {Object.keys(tabContent).map((tab) => (
              <motion.button
                key={tab}
                className={selectedTab === tab ? "active" : ""}
                onClick={() => setSelectedTab(tab)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {tabContent[tab].title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content with Smooth Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              className="tab-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {tabContent[selectedTab].icon}
              <h3>{tabContent[selectedTab].title}</h3>
              <p>{tabContent[selectedTab].text}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="video-section">
        {/* Left Side - Video */}
        <motion.div
          className="video-container"
          initial={{ opacity: 1 }} // Start with opacity 0 and slide in from the left
          animate={inView ? { opacity: 1, x: 0 } : {}} // When in view, fade in and slide to its final position
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <video
            src={videoData} // Assuming `videoData` contains the correct video URL
            controls
            className="company-video"
            loading="lazy"
          />
        </motion.div>

        {/* Right Side - Text & Button */}
        <motion.div
          className="text-container"
          initial={{ opacity: 1 }} // Start with opacity 0 and slide in from the right
          animate={inView ? { opacity: 1, x: 0 } : {}} // When in view, fade in and slide to its final position
          transition={{ duration: 1, delay: 0.1 }} // Duration and delay of the animation
        >
          <motion.h2
            initial={{ opacity: 1 }} // Start with opacity 0 and move up
            animate={inView ? { opacity: 1, y: 0 } : {}} // When in view, fade in and slide to its final position
            transition={{ duration: 1 }} // Duration of the animation
          >
            "Empowering Minds, Shaping Futures!"
          </motion.h2>

          <motion.p
            initial={{ opacity: 1 }} // Start with opacity 0 and move up
            animate={inView ? { opacity: 1, y: 0 } : {}} // When in view, fade in and slide to its final position
            transition={{ duration: 1, delay: 0.3 }} // Duration and delay of the animation
          >
            Unlock your potential with our expertly crafted courses. Start
            learning today and transform your future.
          </motion.p>

          {/* Animated Button */}
          <motion.button
            className="explore-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#ff5722" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/courses")}
          >
            Explore Our Courses
          </motion.button>
        </motion.div>
      </div>

      {/* Outreach Program Section */}
      <div className="outreach-section">
        <h2 className="section-title">Our Outreach Program</h2>
        <p>
          At Avaintern EdTech Pvt Ltd, our commitment to fostering educational
          empowerment inspired the creation of the EduPraxis Outreach Program.{" "}
          <br /> <hr />
          This initiative aims to uplift and equip government college students
          with essential skills crucial for their professional journey. Through
          hands-on workshops, mentorship, and exposure to real-world scenarios,
          we empower these students to thrive in their chosen careers. <br />
        </p>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            300: {
              slidesPerView: 1,
            },
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {images
            .filter((image) => image)
            .map((image, index) => (
              <SwiperSlide key={index}>
                <div className="card-img-container">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="card-img"
                  />
                </div>
              </SwiperSlide>
            ))}

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
      <div className="our_collaborations">
        <h2 className="section-title">College Collaboration and Sponsorship</h2>
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
            delay: 2000, // Slide every 2.5 seconds
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
          {collabImages.map((image, index) => (
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
      <div className="why-choose-us" ref={ref}>
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="cards-container">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={card.image} alt={card.title} className="card-img" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-content">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="faq-section">
        <h2 className="faq-title">❓ Frequently Asked Questions</h2>

        <div className="faq-container">
          {/* Left Side: FAQ List */}
          <div className="faq-left">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }} // Hover effect
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  style={{
                    backgroundColor: openIndex === index ? "#f0f0f0" : "white", // Visual feedback
                  }}
                >
                  <h3>{faq.question}</h3>
                  <motion.span
                    animate={{
                      rotate: openIndex === index ? 180 : 0, // Rotate chevron
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </motion.span>
                </div>

                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndex === index
                      ? { height: "auto", opacity: 1, padding: "15px" } // Expand with padding
                      : { height: 0, opacity: 0, padding: "0px" }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* Right Side: FAQ Image
          <motion.div
            className="faq-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={faqImage} alt="FAQ" />
          </motion.div> */}
        </div>
      </div>
    </>
  );
};

export default About;
