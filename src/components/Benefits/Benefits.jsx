import React from "react";
import "./RowDisplay.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Benefits Data
const benefitsData = [
  {
    image: "/images/business strategy.png",
    title: "Business Strategies",
    content:
      "Master business strategies to drive growth and make informed decisions.",
  },
  {
    image: "/images/about/intractive learning.png",
    title: "Interactive Learning",
    content:
      "Learn and grow your skills with our mentors through interactive learning.",
  },
  {
    image: "/images/Live Project.png",
    title: "Live Training",
    content:
      "Mentors conduct live training sessions to provide hands-on learning experience.",
  },
  {
    image: "/images/about/247 support.png",
    title: "24/7 Support",
    content: "Our support team is available around the clock to assist you.",
  },
];

// Student Data with names
const studentsData = [
  { image: "/images/Student/1.jpg", name: "Naveen" },
  { image: "/images/Student/2.jpg", name: "Karan" },
  { image: "/images/Student/3.jpg", name: "Indusri" },
  { image: "/images/Student/4.jpg", name: "Safiya" },
  { image: "/images/Student/5.jpg", name: "Sumit" },
  { image: "/images/Student/6.jpg", name: "Veerababuneduri" },
  { image: "/images/Student/7.jpg", name: "Manisu" },
];

const Benefits = () => {
  return (
    <div className="row-container">
      <h1>Benefits</h1>
      {benefitsData.map((item, index) => (
        <div className="row-item" key={index}>
          <img src={item.image} alt={item.title} className="row-image" />
          <div className="row-content">
            <h3 className="row-title">{item.title}</h3>
            <p className="row-text">{item.content}</p>
          </div>
        </div>
      ))}

      {/* Our Placed Student Section */}
      <div className="students-section">
        <h1>Our Placed Students</h1>

        <Swiper
          slidesPerView={1} // Default for mobile
          spaceBetween={20} // Space between slides
          pagination={{
            clickable: true, // Enable clickable pagination
          }}
          loop={true}
          autoplay={{
            delay: 1200, // Autoplay delay (in milliseconds)
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Responsive breakpoints
            480: {
              slidesPerView: 2, // 2 slides for screens >= 480px
            },
            768: {
              slidesPerView: 3, // 3 slides for screens >= 768px
            },
            1024: {
              slidesPerView: 4, // 4 slides for screens >= 1024px
            },
          }}
          modules={[Autoplay]} // Add Pagination and Autoplay modules
          className="mySwiper"
        >
          {studentsData.map((student, index) => (
            <SwiperSlide key={index}>
              <div className="student-card">
                <img
                  src={student.image}
                  alt={`Student ${student.name}`}
                  className="student-image"
                />
                <p className="student-name">{student.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Benefits;
