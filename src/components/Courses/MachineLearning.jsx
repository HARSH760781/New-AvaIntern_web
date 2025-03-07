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

const MachineLearning = () => {
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
        title: "Machine Learning Course",
        text: "Check out this Machine Learning course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };
  const curriculumData = [
    {
      title: "💡 Overview of Machine Learning",
      topics: [
        "Types of machine learning (supervised, unsupervised, reinforcement)",
        "Key concepts and terminology",
        "Applications of machine learning",
      ],
    },
    {
      title: "💡Data Preprocessing",
      topics: [
        "Data collection and cleaning",
        "Handling missing data",
        "Feature scaling and normalization",
      ],
    },
    {
      title: "💡 Linear Regression",
      topics: [
        "Understanding linear regression models",
        "Least squares method",
        "Evaluating regression models",
      ],
    },
    {
      title: "💡Classification Algorithms",
      topics: [
        "Logistic regression",
        "Decision trees",
        "Support vector machines (SVM)",
        "Assessment -1  & Quiz -1 ",
      ],
    },
    {
      title: "💡 Model Evaluation",
      topics: [
        "Metrics for classification and regression",
        "Confusion matrix",
        "Precision, recall, F1 score, and ROC-AUC",
      ],
    },
    {
      title: "💡Overfitting and Regularization",
      topics: [
        "Understanding overfitting and underfitting",
        "Techniques to prevent overfitting",
        "Assignment & Quiz-2",
      ],
    },
    {
      title: "💡 Ensemble Methods",
      topics: [
        "Bagging and boosting",
        "Random forests",
        "Gradient boosting machines",
      ],
    },
    {
      title: "💡 Feature Engineering",
      topics: [
        "Importance of feature selection",
        "Techniques for creating new features",
        "Dimensionality reduction",
      ],
    },
    {
      title: "💡  Clustering and Dimensionality Reduction",
      topics: ["Project Assignment", "K-means clustering"],
    },
  ];
  const scheduleData = [
    { week: "Week 1-4", topic: " Introduction to Machine Learning" },
    { week: "Week 5-8", topic: "Core Machine Learning Techniques" },
    { week: "Week 9-10", topic: "Advanced Machine Learning Techniques" },
    { week: "Week 11-12", topic: "Practical Applications and Projects" },
  ];

  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="Machine Learning"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Machine Learning" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About Machine Learning</h2>
          <p>
            Machine learning is a branch of AI that enables systems to learn
            from data and make decisions without explicit programming.
          </p>
          <button className="explore-btn">Explore Course</button>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="Machine "
        subtitle="Learning"
        description="🤖 A Simple Guide to the World of Machine Learning ✨"
        keyPoints={[
          "🔥 Machine Learning (ML) ",
          "🚀 Learn Machine Learning Algorithms",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"hero_image.jpg"}
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
              "Explore the fascinating realm of Machine Learning, gain essential
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
            <h3>What is Machine Learning?</h3>{" "}
            <p>
              {" "}
              Machine Learning (ML) is a subset of artificial intelligence (AI)
              that focuses on developing algorithms that enable machines to
              learn from and make predictions based on data. ML involves various
              techniques that allow systems to identify patterns, make
              decisions, and improve over time without being explicitly
              programmed. <strong>Supervised Learning</strong> involves training
              models on labeled data to make predictions,{" "}
              <strong>Unsupervised Learning</strong> focuses on finding hidden
              patterns in unlabeled data, and{" "}
              <strong>Reinforcement Learning</strong> involves learning through
              trial and error to maximize rewards.{" "}
            </p>
            <p>
              {" "}
              🚀 Exciting News! Join Our Machine Learning Mastery Program 🤖🌟
              Embark on an immersive journey into the cutting-edge world of
              machine learning with our comprehensive ML Training. This program
              offers hands-on experience, practical projects, and expert
              mentorship to elevate your ML skills to the next level. Ready to
              unlock the power of machine learning? Enroll now and transform
              your future! 🌐💡{" "}
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

export default MachineLearning;
