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

const SoftwareTesting = () => {
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
        title: "Software Testing Course",
        text: "Check out this Software Testing course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const curriculumData = [
    {
      title: "💡Introduction to Software Testing",
      topics: [
        "What is Software Testing?",
        "Importance of Testing in SDLC",
        "Types of Testing: Manual and Automation",
      ],
    },
    {
      title: "💡Manual Testing Fundamentals",
      topics: [
        "Test Case Design",
        "Test Execution and Reporting",
        "Defect Life Cycle",
      ],
    },
    {
      title: "💡Automation Testing with Selenium",
      topics: [
        "Introduction to Selenium",
        "Writing Test Scripts",
        "Cross-Browser Testing",
      ],
    },
    {
      title: "💡Performance Testing",
      topics: [
        "Introduction to Performance Testing",
        "Tools: JMeter, LoadRunner",
        "Analyzing Performance Metrics",
      ],
    },
    {
      title: "💡API Testing",
      topics: [
        "Introduction to API Testing",
        "Tools: Postman, SoapUI",
        "Writing API Test Cases",
      ],
    },
    {
      title: "💡Mobile Testing",
      topics: [
        "Introduction to Mobile Testing",
        "Tools: Appium, Espresso",
        "Testing on Different Platforms",
      ],
    },
    {
      title: "💡Security Testing",
      topics: [
        "Introduction to Security Testing",
        "Tools: OWASP ZAP, Burp Suite",
        "Common Vulnerabilities and Fixes",
      ],
    },
    {
      title: "💡Test Management Tools",
      topics: [
        "Introduction to JIRA",
        "Creating and Managing Test Cases",
        "Defect Tracking and Reporting",
      ],
    },
    {
      title: "💡Agile Testing",
      topics: [
        "Testing in Agile Environments",
        "Continuous Testing in CI/CD",
        "Best Practices for Agile Testing",
      ],
    },
    {
      title: "💡Software Testing Project",
      topics: [
        "End-to-End Testing of a Web Application",
        "Creating Test Plans and Reports",
        "Project Review and Feedback",
      ],
    },
  ];

  const scheduleData = [
    { week: "Week 1-2", topic: "Introduction to Software Testing" },
    { week: "Week 3-4", topic: "Manual Testing Fundamentals" },
    { week: "Week 5-6", topic: "Automation Testing with Selenium" },
    { week: "Week 7-8", topic: "Performance Testing" },
    { week: "Week 9-10", topic: "API Testing" },
    { week: "Week 11-12", topic: "Mobile Testing" },
  ];

  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="Software Testing"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Software Testing" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About Software Testing</h2>
          <p>
            This course provides a comprehensive introduction to software
            testing, covering manual and automation testing techniques, tools,
            and best practices.
          </p>
          <Link to="/courses">
            <button className="explore-btn">Explore Course</button>
          </Link>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="Software/"
        subtitle="Testing"
        description="Ensuring Quality in Every Build ✨"
        keyPoints={[
          "🔥 Manual and Automation Testing",
          "🚀 Performance and Security Testing",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"Courses/software testing.png"}
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
            <h2>Welcome to Avaintern 🤝</h2>
            <p className="tagline">
              "Master the art of software testing, ensure the quality of your
              applications, and deliver bug-free software to your users."
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                🚀 <strong>Comprehensive Curriculum :</strong> "Learn the latest
                testing tools and techniques."
              </li>
              <li>
                🛠️ <strong>Hands-on Learning :</strong> Work on real-world
                projects and case studies.
              </li>
              <li>
                💼 <strong>Career Opportunities : </strong> Job assistance,
                interview preparation, and resume-building support.
              </li>
              <li>
                🤝 <strong>Supportive Community :</strong> Network with mentors,
                peers, and industry experts.
              </li>
              <li>
                🎥 <strong>Live Sessions & Comfortable Training :</strong>{" "}
                Interactive live classes with flexible learning options.
              </li>
              <li>
                📼 <strong>Recorded Sessions :</strong> Access to recorded
                lectures for revision at any time.
              </li>
              <li>
                🎓 <strong>Internship Opportunity :</strong> Gain hands-on
                experience with internship programs.
              </li>
            </ul>
            <h3>What is Software Testing?</h3>
            <p>
              Software testing is the process of evaluating and verifying that a
              software application or system meets the specified requirements
              and works as expected. It involves executing a program or
              application with the intent of finding bugs, errors, or defects.
            </p>
            <p>
              🚀 Exciting News! Join Our Software Testing Mastery Program 🛠️🌟
              Embark on an immersive journey into the world of software testing
              with our comprehensive training. This program offers hands-on
              experience, practical projects, and expert mentorship to elevate
              your testing skills to the next level. Ready to unlock the power
              of quality assurance? Enroll now and transform your future! 🌐💡
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

export default SoftwareTesting;
