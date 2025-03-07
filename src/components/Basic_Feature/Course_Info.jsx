import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaLightbulb } from "react-icons/fa"; // New icons
import "./Course_Info.css"; // Ensure to create a CSS file with this name

const Course_Info = () => {
  return (
    <div className="course-info">
      <h3>What We Provide</h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="info-list"
      >
        <div className="info-item info-item-bg1">
          <FaUserGraduate style={{ marginRight: "8px" }} />
          Comprehensive Learning
        </div>
        <div className="info-item info-item-bg2">
          <FaLaptopCode style={{ marginRight: "8px" }} />
          Hands-on Coding Experience
        </div>
        <div className="info-item info-item-bg3">
          <FaLightbulb style={{ marginRight: "8px" }} />
          Innovation & Creativity
        </div>
      </motion.div>
    </div>
  );
};

export default Course_Info;
