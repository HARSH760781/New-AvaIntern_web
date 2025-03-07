import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonial.css";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    rating: "⭐⭐⭐⭐⭐",
    feedback:
      "I thoroughly enjoyed the AI course, finding it informative and engaging. The instructors' expertise and enthusiasm made complex concepts accessible.",
    name: "Ankit Kumar",
    image: "ankit kumar.jpg",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    feedback:
      "The mentor was awesome and teaches very nicely. The Course consists of lectures covering basics to advanced concepts with real-life projects.",
    name: "Sumit",
    image: "sanjana.jpg",
  },
  {
    rating: "⭐⭐⭐⭐",
    feedback:
      "From the very first session, I realized that this training was different. Interactive learning and real projects made me industry-ready!",
    name: "Raj Anand",
    image: "raj anand.jpg",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    feedback:
      "The mentorship and guidance were exceptional. The trainers provided real-time industry insights, making learning much more effective!",
    name: "Archana Gupta",
    image: "archana.jpg",
  },
  {
    rating: "⭐⭐⭐⭐",
    feedback:
      "Instead of just theory, we got to work on real projects, bridging the gap between academics and industry requirements.",
    name: "Kireet",
    image: "Kireet.jpg",
  },
];

export default function Testimonial() {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">What Our Students Say</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Autoplay]} // Add Autoplay module
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
        loop={true} // Enable infinite loop
        breakpoints={{
          900: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-author">
                <img
                  src={`/images/Reviews/${testimonial.image}`}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div className="testimonial-rating">{testimonial.rating}</div>
                <p className="testimonial-feedback">{testimonial.feedback}</p>
                <span className="testimonial-name">{testimonial.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
