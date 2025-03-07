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

const ArtificialIntelligence = () => {
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
        title: "Artificial Intelligence Course",
        text: "Check out this Artificial Intelligence course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };
  const curriculumData = [
    {
      title: "💡 Introduction of Artificial Intelligence",
      topics: [
        "What is Artificial Intelligence?",
        "Historical Overview of AI",
        "AI Applications",
      ],
    },
    {
      title: "💡Mathematics for AI",
      topics: [
        "Ethical Considerations in AI",
        "Linear Algebra",
        "Probablity and Statistics",
      ],
    },
    {
      title: "💡Machine Learning",
      topics: [
        "Calculus & Optimization",
        "Supervised Learning (Regression,Classification)",
        "Unsupervised Learning (Clustering,Dimensionality,Reduction)",
      ],
    },
    {
      title: "💡Natural Language Processing",
      topics: [
        "Semi-Supervised Learning",
        "Reinforcement Learning",
        "ASSESSMENT-1 & Quiz",
      ],
    },
    {
      title: "💡 Computer Vision",
      topics: [
        "Decision Trees,Random Forest",
        "Gradient Boosting,Neural Networks",
        "Deep Learning",
        "Tokenization,Stemming and Lenmatization",
      ],
    },
    {
      title: "💡 Robotics",
      topics: [
        "Sentiment Analysis",
        "Named Entity Recognition",
        "Assignment & Quiz-2",
      ],
    },
    {
      title: "💡AI Ethics and Future Directions",
      topics: [
        "Machine Translation",
        "Language Models and Pretrained Models",
        "Text Classification , Text Geneation",
      ],
    },
    {
      title: "💡 Final Project Part-1",
      topics: [
        "Image Processing & Image Segmentation",
        "Object Detection",
        "Convolutional Neural Networks (CNNs)",
        "Transfer Learning",
      ],
    },
    {
      title: "💡 Final Project Part-2",
      topics: [
        "Project Assignment",
        "Generative Adversarial Networks (GANs)",
        "Robotic Systems",
      ],
    },
    {
      title: "💡  Final Project Part-3",
      topics: [
        "Robot Localization and Mapping",
        "Robot Perception",
        "Path Planning and Navigation",
      ],
    },
    {
      title: "💡  Final Project Part-4",
      topics: [
        " Final Project Part-4",
        "Transparency and Interpretability",
        "Project Review",
      ],
    },
    {
      title: "💡 Final Project Part-5",
      topics: [
        "Legal and Social implications of AI",
        "The future of AI and its impact on Society",
        "Project Submission",
      ],
    },
  ];
  const scheduleData = [
    { week: "Week 1-4", topic: " Introduction to AI" },
    { week: "Week 5-8", topic: "Machine Learning Foundations" },
    { week: "Week 9-10", topic: "Deep Learning and Neural Networks" },
    { week: "Week 11-12", topic: "Advanced Topics and Projects" },
  ];

  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="Artificial Intelligence"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Artificial Intelligence" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About Artificial Intelligence</h2>
          <p>
            An AI (Artificial Intelligence) course typically covers a wide range
            of topics related to the theory, algorithms, and applications of
            artificial intelligence..
          </p>
          <button className="explore-btn">Explore Course</button>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="Artificial "
        subtitle="Intelligence"
        description="🤖 A Simple Guide to the World of Artificial Intelligence ✨"
        keyPoints={[
          "🔥 Machine Learning (ML) & Robotics",
          "🚀 Learn Natural Language Processing (NLP)",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"Courses/Artificial INTELLIGENCE.png"}
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
            <h2>Welcome to Avaintern :handshake:</h2>
            <p className="tagline">
              "Explore the fascinating realm of AI, gain essential insights, and
              understand the fundamentals that drive intelligent systems in
              today's innovative world."
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                🚀 <strong>Comprehensive Curriculum :</strong> "Industry-aligned
                syllabus integrating core principles and applications of AI. "
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

            <h3>What is Artificial Intelligence?</h3>
            <p>
              Artificial Intelligence (AI) is a branch of computer science that
              focuses on creating intelligent machines capable of performing
              tasks that typically require human intelligence.
              <strong>Machine Learning</strong> is a subset of AI that enables
              machines to learn from data,{" "}
              <strong>Natural Language Processing (NLP)</strong> allows them to
              understand and interact using human language, and{" "}
              <strong>Computer Vision</strong> enables them to interpret and
              process visual information. This combination makes AI a
              transformative technology, offering automation, efficiency, and
              new capabilities across various industries.
            </p>
            <p>
              🚀 Exciting News! Join Our AI Mastery Program 🤖🌟 Embark on an
              immersive journey into the cutting-edge world of artificial
              intelligence with our comprehensive AI Training. This program
              offers hands-on experience, practical projects, and expert
              mentorship to elevate your AI skills to the next level. Ready to
              unlock the power of AI? Enroll now and transform your future! 🌐💡
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

export default ArtificialIntelligence;
