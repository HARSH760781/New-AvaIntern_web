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

const AppDevelopment = () => {
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
        title: "App Development Course",
        text: "Check out this App Development course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const curriculumData = [
    {
      title: "💡 Introduction to App Development",
      topics: [
        "Introduction to mobile apps",
        "Development tools & IDEs",
        "Project setup",
      ],
    },
    {
      title: "💡 UI/UX Design",
      topics: [
        "Material Design & Human Interface Guidelines",
        "Wireframing & Prototyping",
        "Responsive UI",
      ],
    },
    {
      title: "💡 React Native & Flutter",
      topics: [
        "Introduction to React Native & Flutter",
        "Widgets & Components",
        "State Management",
      ],
    },
    {
      title: "💡 Backend & APIs",
      topics: [
        "REST & GraphQL APIs",
        "Firebase & Node.js Backend",
        "Authentication & Security",
      ],
    },
  ];

  const scheduleData = [
    { week: "Week 1-3", topic: "Introduction & UI Design" },
    { week: "Week 4-6", topic: "Frontend Development" },
    { week: "Week 7-9", topic: "Backend Integration" },
    { week: "Week 10-12", topic: "Final Project & Deployment" },
  ];

  return (
    <div className="app-dev-container">
      <CourseHeader
        title="App Development"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "App Development" },
        ]}
      />

      <div className="course-content">
        <div className="course-text">
          <h2>About App Development</h2>
          <p>
            Learn mobile app development with React Native and Flutter. Build
            cross-platform apps with real-world projects.
          </p>
          <button className="explore-btn">Explore Course</button>
        </div>
      </div>

      <CourseDetails
        courseUrl={courseUrl}
        title="App"
        subtitle="Development"
        description="Master app development with real-world projects."
        keyPoints={[
          "🔥 Build Scalable Mobile Apps",
          "🚀 Learn React Native & Flutter",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"Courses/App Development.png"}
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
              "Explore the fascinating realm of App Developement, gain essential
              insights, and understand the fundamentals that drive intelligent
              systems in today's innovative world."
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                🚀 <strong>Comprehensive Curriculum :</strong> "Industry-aligned
                syllabus integrating core principles and applications of App
                Development."
              </li>
              <li>
                🛠️ <strong>Hands-on Learning :</strong> Work on real-world
                projects and case studies.
              </li>
              <li>
                💼 <strong>Career Opportunities :</strong> Job assistance,
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

            <h3>What is App Development?</h3>
            <p>
              App Development involves creating software applications for mobile
              devices, web platforms, and other digital environments. It
              encompasses a wide range of processes, from designing user
              interfaces and user experiences to coding and testing the final
              product.
              <strong>Front-End Development</strong> focuses on the user-facing
              part of an app, ensuring a seamless and engaging experience.{" "}
              <strong>Back-End Development</strong> handles the server-side,
              managing databases, and ensuring the app functions smoothly behind
              the scenes.
            </p>
            <p>
              🚀 Exciting News! Join Our App Development Mastery Program 📱✨
              Embark on an immersive journey into the dynamic world of app
              development with our comprehensive training. This program offers
              hands-on experience, practical projects, and expert mentorship to
              elevate your app development skills to the next level. Ready to
              build the next big app? Enroll now and transform your future! 🌐💡
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

export default AppDevelopment;
