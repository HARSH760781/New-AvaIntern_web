import { useEffect, useRef } from "react";
import "./Banner.css";

const tech_courses = [
  { id: 1, title: "Web Development", image: "/images/Full_Stack.jpg" },
  { id: 2, title: "Data Science", image: "/images/aiml.png" },
  { id: 3, title: "Machine Learning", image: "/images/machine_learning.png" },
  { id: 4, title: "Cloud Computing", image: "/images/datascience.png" },
  { id: 5, title: "Cyber Security", image: "/images/cyber-security.png" },
  { id: 6, title: "IoT", image: "/images/iot.png" },
  { id: 7, title: "Devops", image: "/images/devops.png" },
  { id: 8, title: "App Development", image: "/images/app_d.png" },
];

const Non_tech_course = [
  { id: 1, title: "HR Management", image: "/images/hr-management.png" },
  { id: 2, title: "Embedded System", image: "/images/embbeded.png" },
  {
    id: 3,
    title: "Business Analytics",
    image: "/images/business-analytics.png",
  },
  { id: 4, title: "Digital Marketing", image: "/images/digital_marketing.png" },
  { id: 5, title: "Finance", image: "/images/finance.png" },
  { id: 6, title: "VLSI", image: "/images/vlsi.png" },
  { id: 7, title: "AutoCAD", image: "/images/cad.png" },
];

const Banner = () => {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  useEffect(() => {
    const topSlider = topSliderRef.current;
    const bottomSlider = bottomSliderRef.current;
    let scrollSpeed = 1;

    const autoScroll = () => {
      if (topSlider) {
        topSlider.scrollLeft += scrollSpeed;
        if (topSlider.scrollLeft >= topSlider.scrollWidth / 2) {
          topSlider.scrollLeft = 0;
        }
      }
      if (bottomSlider) {
        bottomSlider.scrollLeft -= scrollSpeed;
        if (bottomSlider.scrollLeft <= 0) {
          bottomSlider.scrollLeft = bottomSlider.scrollWidth / 2;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="highlight-box">
      <h2>Domains We Cover</h2>

      <div className="slider-container">
        <div className="course-row top-row" ref={topSliderRef}>
          {[...tech_courses, ...tech_courses].map((course, index) => (
            <div key={`top-${index}`} className="course-card">
              <img src={course.image} alt={course.title} />
              <h5>{course.title}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-container">
        <div className="course-row bottom-row" ref={bottomSliderRef}>
          {[...Non_tech_course, ...Non_tech_course].map((course, index) => (
            <div key={`bottom-${index}`} className="course-card">
              <img src={course.image} alt={course.title} />
              <h5>{course.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
