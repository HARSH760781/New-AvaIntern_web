import React from "react";
import "./OurMentor.css";

// Import your images and gifs
import mentorImage1 from "/images/Reviews/Krishna.png";
import mentorImage2 from "/images/Reviews/arzoo.png";
import mentorImage3 from "/images/Reviews/Rohit.jpg";
import mentorImage4 from "/images/Reviews/Raji Kumar.jpg";
import gifImage from "/images/THUMB.jpg";

const OurMentor = () => {
  return (
    <div className="container">
      <section className="mentor-section">
        <h3>Our Industrial Experts</h3>
        {/* <div className="mentor-images">
          <img src={mentorImage3} alt="Eng.. Rajit Kumar" />
          <img src={mentorImage1} alt="Eng. Krishna" />
          <img src={mentorImage2} alt="Eng. Arzoo" />
          <img src={mentorImage4} alt="Eng. Rohit Kumar" />
        </div> */}
        <p>
          Meet our team of expert mentors who are here to guide you every step
          of the way!
        </p>
      </section>

      <section className="info-section">
        <div className="left-side">
          <p>
            We are dedicated to enriching your knowledge through our platform.
            <strong> AvaIntern</strong>
          </p>
        </div>
        {/* <div className="right-side">
          <img src={gifImage} alt="Gif" />
        </div> */}
      </section>

      <section className="grid-section">
        <div className="grid-container">
          <div className="grid-item">
            <img src={mentorImage1} alt="Eng. Krishna" />
            <h4>Eng. Krishna</h4>
            <p> VLSI & Embedded System Specialist </p>
          </div>
          <div className="grid-item">
            <img src={mentorImage2} alt="Eng. Arzoo" />
            <h4>Eng. Arzoo</h4>
            <p>AutoCAD Specialist </p>
          </div>
          <div className="grid-item">
            <img src={mentorImage3} alt="Eng. Rohit" />
            <h4>Eng. Rohit Kumar</h4>
            <p>IoT Specialist </p>
          </div>
          <div className="grid-item">
            <img src={mentorImage4} alt="Eng. Rajit Kumar" />
            <h4>Eng. Rajit Kumar</h4>
            <p>Civil & Mechanical software Specialist </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMentor;
