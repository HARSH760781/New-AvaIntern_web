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

const BusinessAnalytics = () => {
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
        title: "Business Analytics Course",
        text: "Check out this Business Analytics course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const curriculumData = [
    {
      title: "💡Introduction to Business Analytics",
      topics: [
        "What is Business Analytics?",
        "Role of Analytics in Decision Making",
        "Types of Analytics: Descriptive, Predictive, Prescriptive",
      ],
    },
    {
      title: "💡Data Visualization",
      topics: [
        "Introduction to Tableau and Power BI",
        "Creating Dashboards and Reports",
        "Best Practices for Data Visualization",
      ],
    },
    {
      title: "💡Statistical Analysis",
      topics: [
        "Descriptive Statistics",
        "Inferential Statistics",
        "Hypothesis Testing",
      ],
    },
    {
      title: "💡Predictive Analytics",
      topics: [
        "Introduction to Predictive Models",
        "Regression Analysis",
        "Time Series Forecasting",
      ],
    },
    {
      title: "💡Data Mining",
      topics: [
        "Introduction to Data Mining",
        "Clustering and Classification Techniques",
        "Association Rule Mining",
      ],
    },
    {
      title: "💡Machine Learning for Business Analytics",
      topics: [
        "Introduction to Machine Learning",
        "Supervised and Unsupervised Learning",
        "Applications in Business",
      ],
    },
    {
      title: "💡Big Data Analytics",
      topics: [
        "Introduction to Big Data",
        "Tools: Hadoop, Spark",
        "Analyzing Large Datasets",
      ],
    },
    {
      title: "💡Business Intelligence Tools",
      topics: [
        "Introduction to QlikView and MicroStrategy",
        "Creating Business Reports",
        "Data Warehousing Concepts",
      ],
    },
    {
      title: "💡Analytics in Business Decision Making",
      topics: [
        "Using Analytics for Strategic Decisions",
        "Case Studies in Business Analytics",
        "Ethics in Business Analytics",
      ],
    },
    {
      title: "💡Business Analytics Project",
      topics: [
        "End-to-End Analytics Project",
        "Data Collection, Cleaning, and Analysis",
        "Presenting Insights to Stakeholders",
      ],
    },
  ];

  const scheduleData = [
    { week: "Week 1-2", topic: "Introduction to Business Analytics" },
    { week: "Week 3-4", topic: "Data Visualization" },
    { week: "Week 5-6", topic: "Statistical Analysis" },
    { week: "Week 7-8", topic: "Predictive Analytics" },
    { week: "Week 9-10", topic: "Data Mining" },
    { week: "Week 11-12", topic: "Machine Learning for Business Analytics" },
  ];

  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="Business Analytics"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Business Analytics" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About Business Analytics</h2>
          <p>
            This course provides a comprehensive introduction to business
            analytics, covering key concepts, tools, and techniques to analyze
            data and make informed business decisions.
          </p>

          <Link to="/courses">
            <button className="explore-btn">Explore Course</button>
          </Link>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="Business/"
        subtitle="Analytics"
        description="Transforming Data into Insights ✨"
        keyPoints={[
          "🔥 Data Visualization with Tableau",
          "🚀 Predictive Analytics",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"/Courses/Business Analytics.png"}
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
              "Master the art of business analytics, transform data into
              actionable insights, and make data-driven decisions to drive
              business success."
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                🚀 <strong>Comprehensive Curriculum :</strong> "Learn the latest
                analytics tools and techniques."
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
            <h3>What is Business Analytics?</h3>
            <p>
              Business analytics is the practice of iterative, methodical
              exploration of an organization's data, with an emphasis on
              statistical analysis. It is used by companies committed to
              data-driven decision-making to gain insights that inform business
              decisions and drive strategic planning.
            </p>
            <p>
              🚀 Exciting News! Join Our Business Analytics Mastery Program 🛠️🌟
              Embark on an immersive journey into the world of business
              analytics with our comprehensive training. This program offers
              hands-on experience, practical projects, and expert mentorship to
              elevate your analytics skills to the next level. Ready to unlock
              the power of data? Enroll now and transform your future! 🌐💡
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

export default BusinessAnalytics;
