import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./OurCourse.css";

const ourcourses = [
  {
    id: 1,
    title: "Full Stack Development",
    tagline: "Master frontend & backend development.",
    image: "/images/Courses/Full Stack poster.png",
    link: "/courses/web-development",
  },
  {
    id: 2,
    title: "Data Science & AI",
    tagline: "Learn machine learning & deep learning.",
    image: "/images/Courses/Data Science poster.png",
    link: "/courses/data-science",
  },
  {
    id: 3,
    title: "Cyber Security",
    tagline: "Become an expert in cybersecurity.",
    image: "/images/Courses/Cyber Security.png",
    link: "/courses/cyber-security",
  },
  {
    id: 4,
    title: "Cloud Computing",
    tagline: "Master AWS, Azure & Google Cloud.",
    image: "/images/Courses/cloud.png",
    link: "/courses/cloud-computing",
  },
  {
    id: 5,
    title: "UI/UX Design",
    tagline: "Design stunning user interfaces & experiences.",
    image: "/images/Courses/UiUx.png",
    link: "/courses/ui-ux",
  },
  {
    id: 6,
    title: "VLSI Design",
    tagline: "Learn chip designing & circuit optimization.",
    image: "/images/Courses/VLSI .png",
    link: "/courses/vlsi",
  },
  {
    id: 7,
    title: "Internet of Things",
    tagline: "Build smart devices with IoT technology.",
    image: "/images/Courses/iot .png",
    link: "/courses/iot",
  },
  {
    id: 8,
    title: "Human Resource",
    tagline: "Master HR strategies & talent management.",
    image: "/images/Courses/HR.png",
    link: "/courses/hr",
  },
  {
    id: 9,
    title: "Embedded System",
    tagline: "Master AWS, Azure & Google Cloud.",
    image: "/images/Courses/Embedded System.png",
    link: "/courses/embedded-system",
  },
  {
    id: 10,
    title: "Application Development",
    tagline: "Become an expert in App Development",
    image: "/images/Courses/App Development.png",
    link: "/courses/app-development",
  },
  {
    id: 11,
    title: "Machine Learning",
    tagline: "Become an expert in Machie Learning",
    image: "/images/Courses/machine Learning.png",
    link: "/courses/machine-learning",
  },
  {
    id: 12,
    title: "Data Analytics",
    tagline: "Become an expert in Data Analytics",
    image: "/images/Courses/Data Analytics.png",
    link: "/courses/data-analytics",
  },
  // {
  //   id: 13,
  //   title: "Machine Learning",
  //   tagline: "Become an expert in Machie Learning",
  //   image: "/images/Courses/machine Learning.png",
  //   link: "/courses/machine-learning",
  // },
  // {
  //   id: 14,
  //   title: "Machine Learning",
  //   tagline: "Become an expert in Machie Learning",
  //   image: "/images/Courses/machine Learning.png",
  //   link: "/courses/machine-learning",
  // },
];

const CourseComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="our-courses-container">
      <motion.h1
        className="our-courses-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Courses
      </motion.h1>

      <div className="our-courses-wrapper">
        {ourcourses.map((course) => (
          <motion.div
            key={course.id}
            className="our-course-card"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: course.id * 0.1 }}
            onClick={() => navigate(course.link)}
          >
            <motion.img
              src={course.image}
              alt={course.title}
              className="our-course-image"
            />
            {/* <div className="course-content">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-tagline">{course.tagline}</p>
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseComponent;
