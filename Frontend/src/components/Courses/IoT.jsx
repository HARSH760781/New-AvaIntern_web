import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Data Science/CourseStyles.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import ScheduleSessions from "../Schedule Sessions/ScheduleSessions";
import CourseDetails from "../Course Supporter/Course Details/CourseDetails";
import CourseHeader from "../Course Supporter/Course Header/CourseHeader";
const IoT = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const courseUrl = window.location.href;
  const [activeTab, setActiveTab] = useState("overview");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(courseUrl);
    alert("Course link copied!");
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "IoT Course",
        text: "Check out this IoT course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const curriculumData = [
    {
      title: "🌐 Introduction to IoT",
      topics: [
        "IoT Basics & Applications",
        "IoT Architecture",
        "Sensors & Actuators",
      ],
    },
    {
      title: "🌐 IoT Networking & Communication",
      topics: ["Wireless Protocols", "Cloud Integration", "Security in IoT"],
    },
    {
      title: "🌐 IoT Development & Prototyping",
      topics: [
        "Embedded Systems",
        "Microcontrollers & Raspberry Pi",
        "IoT Project Development",
      ],
    },
    {
      title: "🌐 IoT Data Analytics & Applications",
      topics: [
        "Data Processing & Storage",
        "AI & Machine Learning in IoT",
        "Real-world Use Cases",
      ],
    },
  ];

  const scheduleData = [
    { week: "Week 1-3", topic: "IoT Fundamentals & Networking" },
    { week: "Week 4-6", topic: "IoT Prototyping & Development" },
    { week: "Week 7-9", topic: "IoT Security & Cloud Integration" },
    { week: "Week 10-12", topic: "Final Project & Certification" },
  ];

  return (
    <div className="iot-container">
      <CourseHeader
        title="Internet of Things (IoT)"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "IoT" },
        ]}
      />

      <CourseDetails
        courseUrl={courseUrl}
        title="Internet"
        subtitle=" of Things"
        description="Learn to build smart IoT solutions with hands-on experience."
        keyPoints={[
          "🌐 IoT Device Connectivity",
          "🔗 Cloud & Edge Computing",
          "🚀 Real-world IoT Applications",
        ]}
        imageUrl="Courses/iot .png"
      />

      <div className="course-menu">
        <button
          className={`menu-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          <DescriptionIcon /> Overview
        </button>
        <button
          className={`menu-btn ${activeTab === "curriculum" ? "active" : ""}`}
          onClick={() => setActiveTab("curriculum")}
        >
          <MenuBookIcon /> Course Curriculum
        </button>
        <button
          className={`menu-btn ${activeTab === "schedule" ? "active" : ""}`}
          onClick={() => setActiveTab("schedule")}
        >
          <CalendarTodayIcon /> Schedule & Sessions
        </button>
      </div>

      <div className={`tab-content ${activeTab}`}>
        {activeTab === "overview" && (
          <div className="tab-panel">
            <h2>Welcome to Avaintern 🤝</h2>
            <p className="tagline">
              "Explore IoT technology and develop smart, connected devices."
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                🌐 <strong>Comprehensive Learning :</strong> Covers IoT
                fundamentals, development, and cloud integration.
              </li>
              <li>
                🛠️ <strong>Hands-on Projects :</strong> Work on real IoT
                applications.
              </li>
              <li>
                💼 <strong>Career Guidance :</strong> Resume building & job
                assistance.
              </li>
              <li>
                🎥 <strong>Live Sessions :</strong> Learn from industry experts.
              </li>
              <li>
                🎓 <strong>Internship Opportunities :</strong> Gain practical
                industry exposure.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "curriculum" && (
          <div className="tab-panel">
            <h2>📚 Course Curriculum</h2>
            {curriculumData.map((item, index) => (
              <div key={index} className="curriculum-section">
                <div
                  className="curriculum-header"
                  onClick={() => toggleSection(index)}
                >
                  <h3>{item.title}</h3>
                  {openSections[index] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </div>
                {openSections[index] && (
                  <ul className="curriculum-content">
                    {item.topics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "schedule" && (
          <ScheduleSessions schedule={scheduleData} />
        )}
      </div>
    </div>
  );
};

export default IoT;
