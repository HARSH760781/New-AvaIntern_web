import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CourseStyles.css";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import DevicesIcon from "@mui/icons-material/Devices";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import ScheduleSessions from "../../Schedule Sessions/ScheduleSessions";
import CourseDetails from "../../Course Supporter/Course Details/CourseDetails";
import CourseHeader from "../../Course Supporter/Course Header/CourseHeader";

const DataScience = () => {
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
        title: "Web Development Course",
        text: "Check out this Web Development course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };
  const curriculumData = [
    {
      title: "💡 Introduction Python",
      topics: [
        "Introduction to Python",
        "Installing Python and Setting Up the Environment",
        "Basic Syntax and Data Types",
      ],
    },
    {
      title: "💡Intermediate Python",
      topics: [
        "Operators and Expressions",
        "Conditional Statements in Python",
        "Loops Functions Python",
      ],
    },
    {
      title: "💡 Introduction to NumPy",
      topics: ["Python Modules", "Introduction to NumPy", "Array Creation"],
    },
    {
      title: "💡 Introduction Opencv and Matplotlib",
      topics: ["Array ManipulatioN", "Indexing", "ASSESSMENT & QUIZ -1"],
    },
    {
      title: "💡 Introduction to Machine Learning",
      topics: [
        "Slicing",
        "Introduction to Pandas",
        "ASSESSMENT & QUIZ - 2",
        "Series and DataFrame Objects",
      ],
    },
    {
      title: "💡 Machine Learning Algorithms",
      topics: [
        "Data Indexing and Selection",
        "Introduction to Data Visualization",
        "ASSESSMENT & QUIZ - 3",
      ],
    },
    {
      title: "💡Final project",
      topics: [
        "Basic Plotting with Matplotlib",
        "Line Plots, Scatter Plots, and Bar Plots",
        "Histograms and Box Plots",
      ],
    },
    {
      title: "💡Final Project Part-1",
      topics: [
        "Advanced Plotting Techniques",
        "Data Analysis with Pandas",
        "Data Cleaning and Preprocessing",
        "Merging, Joining, and Concatenating",
      ],
    },
    {
      title: "💡Final Project Part-2",
      topics: [
        "Project Assignment",
        "DataFrames Grouping and Aggregating",
        "Data Time Series Analysis with Pandas",
      ],
    },
    {
      title: "💡 CRUD in Database",
      topics: [
        "Creating of Table, data types, operators",
        "Different Types of Joins,Views and Subqueries",
        "PROJECT DISCUSSION",
      ],
    },
    {
      title: "💡  Final Project Part-3",
      topics: [
        "Working with External Data Sources",
        "Machine Learning with Scikit-Learn",
        "Introduction to Machine Learning",
        "Data Preprocessing",
      ],
    },
    {
      title: "💡 Final Project - 4",
      topics: [
        "Feature Engineering",
        "Supervised Learning Algorithms (Linear Regression, Logistic Regression, Decision Trees, Random Forests",
        "Project Submission",
      ],
    },
    {
      title: "💡 Final Project - 5",
      topics: [
        "Unsupervised Learning Algorithms (K-Means Clustering, Principal Component Analysis)",
        "Model Evaluation and Hyperparameter Tuning",
        "Project Submission",
      ],
    },
  ];

  const scheduleData = [
    { week: "Week 1-4", topic: " Introduction to Data Science" },
    { week: "Week 5-8", topic: " Core Data Science Techniques" },
    { week: "Week 9-10", topic: "Advanced Data Science Techniques" },
    { week: "Week 11-12", topic: "Data Science Projects and Applications" },
  ];
  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="Data Science"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Data Science" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About Data Science</h2>
          <p>
            Data is one of the most important commodities in today’s world. With
            billions of bytes of data available every second, the ability to
            gain useful insights from data for various decisions is an important
            factor in harnessing the potential of data.
          </p>
          <button className="explore-btn">Explore Course</button>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="Data"
        subtitle="Science"
        description="Gain crucial skills and insights to excel in a data-driven world. 🚀"
        keyPoints={[
          "🔥 Data Collection and Acquisition",
          "🚀 Exploratory Data Analysis (EDA)",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"Courses/Data Science poster.png"}
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
              "Embark on a transformative journey, gaining essential skills and
              insights to make impactful decisions in today's data-driven world.
              🚀"
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                🚀 <strong>Comprehensive Curriculum :</strong> Industry-aligned
                syllabus covering frontend and backend development.
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

            <div>
              <h3>What is Data Science?</h3>
              <p>
                Data science is an interdisciplinary field that combines
                statistical methods, programming skills, and domain knowledge to
                extract insights and knowledge from structured and unstructured
                data. <strong>Data collection</strong> involves gathering data
                from various sources, <strong>data cleaning</strong> prepares it
                for analysis, and <strong>data visualization</strong> helps
                communicate insights effectively. Techniques like{" "}
                <strong>machine learning</strong> and{" "}
                <strong>statistical analysis</strong> are used to uncover
                patterns and predictions, making data science crucial for
                decision-making in today's data-driven world.
              </p>
              <p>
                📊 Exciting News! Join Our Data Science Mastery Program 📈🌟
                Embark on a transformative journey into the dynamic world of
                data science with our comprehensive training. This program
                offers hands-on experience, real-world projects, and expert
                mentorship to elevate your skills to new heights. Ready to
                harness the power of data? Enroll now and shape the future! 🌐💡
              </p>
            </div>
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

export default DataScience;
