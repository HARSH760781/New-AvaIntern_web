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
// import { GiArtificialIntelligence } from "react-icons/gi";

const DataAnalytics = () => {
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
        title: "UI/UX Course",
        text: "Check out this UI/UX course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };
  const curriculumData = [
    {
      title: "💡Introduction to Data Analytics",
      topics: [
        "Overview of data analytics and its applications in various industries",
        "Introduction to Python programming language and libraries (NumPy, Pandas) for data manipulation",
        "Basics of data visualization using Matplotlib and Seaborn",
      ],
    },
    {
      title: "💡Data Collection and Cleaning",
      topics: [
        "Data acquisition methods (web scraping, APIs, databases)",
        "Techniques for data cleaning and preprocessing (handling missing values, outliers, data normalization)",
        "Data cleaning , transformation & Data visualization",
      ],
    },
    {
      title: "💡Introduction to Statistical Analysis",
      topics: [
        "Descriptive statistics",
        "Statistical inference",
        "Hypothesis testing",
      ],
    },
    {
      title: "💡UI Design Tools and Techniques",
      topics: [
        "Surveys and Questionnaires",
        "Visual Design Principles",
        "Color Theory & Typography",
      ],
    },
    {
      title: "💡 Exploratory Data Analysis (EDA)",
      topics: [
        "Descriptive statistics and summary metrics",
        "Data visualization techniques for EDA (histograms, box plots, scatter plots)",
        "Correlation analysis and feature selection",
      ],
    },
    {
      title: "💡Statistical Analysis",
      topics: [
        "Introduction to statistical inference and hypothesis testing",
        "Parametric and non-parametric tests (t-tests, ANOVA, chi-square test)",
        "Regression analysis (linear regression, logistic regression)",
      ],
    },
    {
      title: "💡Design Systems and UI Kits",
      topics: [
        "Introduction to machine learning concepts and algorithms",
        "Supervised learning (classification, regression) with scikit-learn",
        "Unsupervised learning (clustering, dimensionality reduction)",
      ],
    },
    {
      title: "💡Time Series Analysis",
      topics: [
        "Advanced visualization techniques",
        "Dashboard design principles",
        "Best practices for dashboard design & implementation",
        "ASSESSMENT & QUIZ - 2",
      ],
    },
    {
      title: "💡 Advanced Topics and Capstone Project",
      topics: [
        "Advanced machine learning techniques (ensemble methods, neural networks) Introduction to big data technologies (Hadoop, Spark)",
        "Ethical considerations in data analytics",
        "PROJECT ASSIGNMENT",
      ],
    },
    {
      title: "💡 Big Data Analytics",
      topics: [
        "Seasonal decomposition & ARIMA models",
        "Forecasting techniques",
        "Overview of optimization and simulation",
      ],
    },
    {
      title: "💡 Data Governance and Ethics",
      topics: [
        "Linear & Non-linear programming",
        "Monte Carlo simulation & Queuing theory",
        "Project Review",
      ],
    },
  ];
  const scheduleData = [
    { week: "Week 1-4", topic: "Introduction to Data Analytics" },
    { week: "Week 5-8", topic: "Data Collection and Preprocessing" },
    { week: "Week 9-10", topic: "Exploratory Data Analysis (EDA)" },
    { week: "Week 11-12", topic: "Advanced Data Analysis Techniques" },
  ];

  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="Data Analytics"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Data Analytics" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About Data Analytics</h2>
          <p>
            Data analytics courses focus on equipping individuals with the tools
            and techniques to extract meaningful insights from data,
          </p>
          <Link to="/courses">
            <button className="explore-btn">Explore Course</button>
          </Link>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="Data/"
        subtitle="Analytics"
        description="Transforming Ideas into Intuitive Experiences ✨"
        keyPoints={[
          "🔥 Data Analytics ",
          "🚀 Learn Data Analytics Algorithms",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"Courses/Data Analytics.png"}
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
              "Explore the fascinating realm of Data Analytics, gain essential
              insights, and understand the fundamentals that drive intelligent
              systems in today's innovative world."
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                🚀 <strong>Comprehensive Curriculum :</strong> "Industry-aligned
                syllabus integrating core principles and applications. "
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
            <h3>What is Data Analytics?</h3>
            <p>
              Data analytics involves the process of examining, cleaning,
              transforming, and modeling data to discover useful information,
              draw conclusions, and support decision-making. It encompasses a
              variety of techniques and tools to analyze datasets and identify
              patterns, trends, and correlations. Key aspects of data analytics
              include data collection, data preprocessing, exploratory data
              analysis, statistical analysis, and data visualization. Effective
              data analytics is crucial for making informed business decisions,
              optimizing processes, and gaining a competitive edge in the
              market.
            </p>
            <p>
              🚀 Exciting News! Join Our Data Analytics Mastery Program 📊🌟
              Embark on an immersive journey into the world of data analytics
              with our comprehensive training. This program offers hands-on
              experience, practical projects, and expert mentorship to elevate
              your data analytics skills to the next level. Ready to unlock the
              power of data? Enroll now and transform your future! 🌐💡
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

export default DataAnalytics;
