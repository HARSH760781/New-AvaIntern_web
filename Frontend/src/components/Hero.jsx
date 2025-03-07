import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaTools,
  FaProjectDiagram,
  FaUserGraduate,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa"; // Adding new icons
import "./Hero.css";
import Course_Info from "./Basic_Feature/Course_Info";
import Banner from "./Banner/Banner";
import ExplorePrograms from "./Explore Program/ExplorePrograms";
import Provide from "./Provide/Provide";
import StatsCardContainer from "./Counter/StatsCardContainer";
import TestimonialCard from "./Feedback/Testimonial";
import Sponser from "./Sponser/Sponser";
import OurMentor from "./Our Mentor/OurMentor";
import Benefits from "./Benefits/Benefits";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  const [bootcampImages, setBootcampImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your API key
      const SHEET_ID = import.meta.env.VITE_SHEET_ID; // Replace with your Google Sheet ID
      const RANGE = "Sheet1!F2:F"; // Adjust the range to match your sheet
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

        const bootcampUrls = data.values.map((row) => row[0]);
        // console.log(videoUrls);
        setBootcampImages(bootcampUrls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(bootcampImages);
  return (
    <>
      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <h2>
            Unlock Your Potential and <span>Build Your Future</span> <FaCode />{" "}
            {/* Adding an icon inline with text */}
          </h2>
          <p>
            From classroom to career, we prepare you with practical learning
            designed for today’s Competitive Market.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/courses"
              sx={{
                my: 2,
                mx: 1,
                py: 1.5,
                font: "100%",
                fontWeight: "bold",
                backgroundColor: "blue",
                "&:hover": { background: "#fdd017", color: "black" },
              }}
            >
              Get Started <FaUserGraduate style={{ marginLeft: "8px" }} />{" "}
              {/* Replacing with a new icon */}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {/* <Course_Info /> */}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        >
          {/* <motion.img
            src="/images/hero_image.jpg"
            alt="Hero"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          /> */}
          <Swiper
            effect={"cards"} // Use the 'cards' effect
            modules={[Autoplay, Pagination, EffectCards]} // Include necessary modules
            loop={true} // Enable infinite loop
            autoplay={{
              delay: 2000, // 1 second delay for smooth transitions
              disableOnInteraction: false, // Keep autoplay going even after user interaction
              reverseDirection: true, // Reverse the autoplay direction (optional)
            }}
            pagination={{ clickable: true }} // Enable clickable pagination
            spaceBetween={10} // Space between slides
            slidesPerView={2} // Display one slide at a time
            grabCursor={true} // Show grab cursor for better UX
          >
            {bootcampImages.length > 0 ? (
              bootcampImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Bootcamp ${index + 1}`} />
                </SwiperSlide>
              ))
            ) : (
              <div>Loading ....</div>
            )}
          </Swiper>
        </motion.div>
      </div>
      <Banner />
      <StatsCardContainer />
      <ExplorePrograms />
      <Provide />
      <TestimonialCard />
      <OurMentor />
      <Benefits />
      <Sponser />
    </>
  );
};

export default Hero;
