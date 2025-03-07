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

const CyberSecurity = () => {
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
        title: "Cyber Security Course",
        text: "Check out this Cyber Security course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const curriculumData = [
    {
      title: "🔒 Introduction to Cyber Security",
      topics: [
        "Cyber threats & vulnerabilities",
        "Basic security principles",
        "Introduction to ethical hacking",
      ],
    },
    {
      title: "🔒 Network Security",
      topics: [
        "Firewalls & Intrusion Detection",
        "VPNs & Secure Communication",
        "Wireless Security",
      ],
    },
    {
      title: "🔒 Application Security",
      topics: [
        "Secure Coding Practices",
        "Web Security & OWASP Top 10",
        "Penetration Testing",
      ],
    },
    {
      title: "🔒 Incident Response & Risk Management",
      topics: [
        "Cybersecurity Policies & Compliance",
        "Forensics & Incident Handling",
        "Risk Management Frameworks",
      ],
    },
  ];

  const scheduleData = [
    { week: "Week 1-3", topic: "Introduction & Security Basics" },
    { week: "Week 4-6", topic: "Network & Web Security" },
    { week: "Week 7-9", topic: "Threat Analysis & Ethical Hacking" },
    { week: "Week 10-12", topic: "Final Project & Certification" },
  ];

  return (
    <div className="cyber-security-container">
      <CourseHeader
        title="Cyber Security"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Cyber Security" },
        ]}
      />

      <CourseDetails
        courseUrl={courseUrl}
        title="Cyber"
        subtitle="Security"
        description="Learn to protect digital systems from cyber threats."
        keyPoints={[
          "🔒 Master Ethical Hacking",
          "🛡️ Learn Risk Management",
          "🚀 Hands-on Practical Labs",
        ]}
        imageUrl="Courses/Cyber Security.png"
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
              "Learn Cyber Security fundamentals and protect digital systems
              from emerging threats."
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                🔒 <strong>Comprehensive Curriculum :</strong> Covers ethical
                hacking, network security, and forensics.
              </li>
              <li>
                🛠️ <strong>Hands-on Learning :</strong> Work on real-world cyber
                attack scenarios.
              </li>
              <li>
                💼 <strong>Career Assistance :</strong> Resume building & job
                placement support.
              </li>
              <li>
                🎥 <strong>Live Sessions :</strong> Interactive training with
                experts.
              </li>
              <li>
                🎓 <strong>Internship Opportunities :</strong> Gain practical
                industry experience.
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

export default CyberSecurity;
