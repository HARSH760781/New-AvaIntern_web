import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonial.css";

const testimonials = [
  // ... (your testimonials data)
];

const TestimonialCarousel = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    const slide = () => {
      if (!isPaused) {
        slider.scrollBy({ left: 1, behavior: "smooth" });
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      requestAnimationFrame(slide);
    };
    slide();
  }, [isPaused]);

  // Handle touch swipe
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const swipeDistance = touchStart - touchEnd;
    if (swipeDistance > 50) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Swipe left
    } else if (swipeDistance < -50) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Swipe right
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="parent-div">
      <div
        className="testimonial-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <h2 className="testimonial-heading">
          What Our{" "}
          <u>
            <span>Students Say</span>
          </u>
        </h2>
        <div
          className="testimonial-container"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="slider-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
