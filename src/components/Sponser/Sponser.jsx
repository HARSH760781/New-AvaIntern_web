import React from "react";
import "./Sponser.css";
import { Link } from "react-router-dom";
// import Link from "react-router-dom";

const Sponser = () => {
  const sponsors = [
    "/images/sponsers/amazon.webp",
    "/images/sponsers/adobe.webp",
    "/images/sponsers/acenture.webp",
    "/images/sponsers/paytm.webp",
    "/images/sponsers/presidio.webp",
    "/images/sponsers/Microsoft.webp",
    "/images/sponsers/myntra.webp",
    "/images/sponsers/autodesk.webp",
  ];

  return (
    <div>
      <div className="sponsor-container">
        <h1>Our Alumni Work At</h1>
        <div className="sponsor-images">
          {sponsors.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`company-${index}`}
              className="sponsor-img"
            />
          ))}
          {sponsors.map((image, index) => (
            <img
              key={index + sponsors.length}
              src={image}
              alt={`company-${index}`}
              className="sponsor-img"
            />
          ))}
        </div>
      </div>
      <div className="change-game">
        <h1>
          Don't Waste Time! <span>Change the Game</span>
        </h1>
        <Link to="/Courses" className="change-game-button">
          Explore Courses
        </Link>
        {/* <button>Apply Now </button> */}
      </div>
    </div>
  );
};

export default Sponser;
