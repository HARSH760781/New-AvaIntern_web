import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Web Development/CourseStyles.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import ScheduleSessions from "../Schedule Sessions/ScheduleSessions";
import CourseDetails from "../Course Supporter/Course Details/CourseDetails";
import CourseHeader from "../Course Supporter/Course Header/CourseHeader";

const HR = () => {
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
        title: "HR Course",
        text: "Check out this HR course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const curriculumData = [
    {
      title: "📖 Introduction to HR",
      topics: ["HR Basics", "Workplace Policies", "Employee Engagement"],
    },
    {
      title: "📖 Talent Acquisition & Management",
      topics: [
        "Recruitment Strategies",
        "Employee Onboarding",
        "Retention Techniques",
      ],
    },
    {
      title: "📖 Performance & Leadership Development",
      topics: [
        "Performance Reviews",
        "Training & Development",
        "Leadership Skills",
      ],
    },
    {
      title: "📖 HR Analytics & Compliance",
      topics: ["HR Data Analytics", "Labor Laws", "Workplace Ethics"],
    },
  ];

  const scheduleData = [
    { week: "Week 1-3", topic: "HR Fundamentals & Workplace Policies" },
    { week: "Week 4-6", topic: "Talent Acquisition & Employee Management" },
    { week: "Week 7-9", topic: "Performance & Leadership Development" },
    { week: "Week 10-12", topic: "HR Analytics & Final Project" },
  ];

  return (
    <div className="hr-container">
      <CourseHeader
        title="Human Resources (HR)"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "HR" },
        ]}
      />

      <CourseDetails
        courseUrl={courseUrl}
        title="Human"
        subtitle=" Resources"
        description="Master HR management skills with hands-on experience."
        keyPoints={[
          "📖 Recruitment & Talent Management",
          "🛠️ Employee Engagement",
          "🚀 HR Analytics & Compliance",
        ]}
        imageUrl="/Courses/HR.png"
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
              "Learn HR best practices and build a strong workforce."
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                📖 <strong>Comprehensive Learning :</strong> Covers HR
                fundamentals, talent management, and compliance.
              </li>
              <li>
                🛠️ <strong>Practical Exposure :</strong> Work on real HR case
                studies.
              </li>
              <li>
                💼 <strong>Career Guidance :</strong> Resume building & job
                assistance.
              </li>
              <li>
                🎥 <strong>Live Sessions :</strong> Learn from HR professionals.
              </li>
              <li>
                🎓 <strong>Internship Opportunities :</strong> Gain real
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

export default HR;
