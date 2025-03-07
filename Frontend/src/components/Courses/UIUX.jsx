import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Data Science/CourseStyles.css"; // You can reuse the same styles
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import ScheduleSessions from "../Schedule Sessions/ScheduleSessions";
import CourseDetails from "../Course Supporter/Course Details/CourseDetails";
import CourseHeader from "../Course Supporter/Course Header/CourseHeader";

const VLSI = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const courseUrl = window.location.href;

  const [activeTab, setActiveTab] = useState("overview");

  // Function to copy the course link
  const copyToClipboard = () => {
    navigator.clipboard.writeText(courseUrl);
    alert("Course link copied!");
  };

  // Toggle FAQ sections
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Function to share using Web Share API
  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "VLSI Course",
        text: "Check out this VLSI course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const curriculumData = [
    {
      title: "💡 Introduction to VLSI Design",
      topics: ["Overview of VLSI", "History of VLSI", "VLSI Design Flow"],
    },
    {
      title: "💡 CMOS Technology and Fabrication",
      topics: [
        "CMOS Technology Overview",
        "Fabrication Process",
        "CMOS Inverter Design",
      ],
    },
    {
      title: "💡 Digital Logic Design for VLSI",
      topics: ["Combinational Logic", "Sequential Logic", "FSM Design"],
    },
    {
      title: "💡 Layout Design and Verification",
      topics: ["Floorplanning", "Place and Route", "DRC and LVS"],
    },
    {
      title: "💡 Low Power VLSI Design",
      topics: [
        "Power Consumption in VLSI",
        "Techniques for Low Power Design",
        "Dynamic Power Management",
      ],
    },
    {
      title: "💡 VLSI Design Tools and Automation",
      topics: ["EDA Tools Overview", "Synthesis Tools", "Simulation Tools"],
    },
    {
      title: "💡 VLSI Testing and Fault Modeling",
      topics: [
        "Test Generation",
        "Fault Models in VLSI",
        "Testing Methodologies",
      ],
    },
    {
      title: "💡 Final Project & Professional Development",
      topics: [
        "VLSI Design Project",
        "Internship Opportunities",
        "Preparing for VLSI Industry",
      ],
    },
  ];

  const scheduleData = [
    { week: "Week 1-4", topic: "Introduction to VLSI Design" },
    { week: "Week 5-8", topic: "CMOS Technology & Digital Logic Design" },
    { week: "Week 9-12", topic: "Layout Design, Power, and Automation" },
    { week: "Week 13-16", topic: "Testing, Fault Modeling, and Project Work" },
  ];

  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="VLSI"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "VLSI" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About VLSI</h2>
          <p>
            The VLSI course focuses on the design and fabrication of Very Large
            Scale Integration circuits, including essential topics like CMOS
            technology, logic design, and low-power VLSI techniques.
          </p>
          <Link to="/courses">
            <button className="explore-btn">Explore Course</button>
          </Link>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="VL"
        subtitle="SI"
        description="Designing Advanced Digital Systems 🖥️"
        keyPoints={[
          "🔥 Learn VLSI Design Techniques",
          "💡 Master CMOS Technology",
          "🛠️ Hands-on VLSI Projects",
        ]}
        imageUrl={"Courses/VLSI .png"}
      />

      {/* Course Menu Navigation */}
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

      {/* Tab Content */}
      <div className={`tab-content ${activeTab}`}>
        {activeTab === "overview" && (
          <div className="tab-panel">
            <h2>Welcome to the VLSI Course 🎓</h2>
            <p className="tagline">
              "Dive deep into VLSI, understand chip design, and explore the
              latest technologies shaping the future of electronics!"
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                🚀 <strong>Comprehensive Curriculum :</strong> Learn
                industry-relevant skills.
              </li>
              <li>
                🛠️ <strong>Hands-on Learning :</strong> Work on real-world VLSI
                projects.
              </li>
              <li>
                💼 <strong>Career Opportunities :</strong> Job support and
                resume building.
              </li>
              <li>
                🤝 <strong>Mentorship :</strong> Get guidance from industry
                professionals.
              </li>
              <li>
                🎥 <strong>Live Sessions & Recorded Classes :</strong> Flexible
                learning.
              </li>
              <li>
                📼 <strong>Internship Opportunity :</strong> Hands-on experience
                through internships.
              </li>
            </ul>
            <h3>What is VLSI?</h3>
            <p>
              VLSI stands for Very Large Scale Integration, which is the process
              of creating integrated circuits by combining thousands to millions
              of transistors on a single chip. This technology is essential in
              modern computing, enabling the creation of powerful microchips
              used in various electronic devices, including smartphones,
              computers, and more. Learn how VLSI design works and become
              proficient in chip design and layout.
            </p>
          </div>
        )}

        {activeTab === "curriculum" && (
          <div className="tab-panel">
            <div className="course-curriculum">
              <h2>📚 Course Curriculum</h2>

              {/** Curriculum Sections */}
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
          </div>
        )}

        {activeTab === "schedule" && (
          <ScheduleSessions schedule={scheduleData} />
        )}
      </div>
    </div>
  );
};

export default VLSI;
