import React, { useState } from "react";
import Card from "./Card"; // Importing the Card component
import "./Card.css";

const CardContainer = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first card
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(cards.length - 1); // Loop to the last card
    }
  };

  return (
    <div className="card-container">
      <button className="nav-button prev" onClick={handlePrev}>
        Prev
      </button>
      <div className="card-wrapper">
        <Card {...cards[currentIndex]} />
      </div>
      <button className="nav-button next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default CardContainer;
