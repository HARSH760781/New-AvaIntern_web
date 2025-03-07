import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CourseStyles.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import ScheduleSessions from "../../Schedule Sessions/ScheduleSessions";
import CourseDetails from "../../Course Supporter/Course Details/CourseDetails";
import CourseHeader from "../../Course Supporter/Course Header/CourseHeader";

const WebDevelopment = () => {
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
      title: "💡Introduction to HTML",
      topics: [
        "Introduction of HTML and Tools",
        "Tags, html elements, buttons",
        "Hyperlinks, images, lists",
      ],
    },
    {
      title: "💡Mathematics for CSS",
      topics: [
        "Tables, divisions, form",
        "Introduction to CSS",
        "Inline Styles , Style Sheets",
      ],
    },
    {
      title: "💡Introduction To JavaScript",
      topics: [
        "Inheritance, cascade, specificity",
        "Classes, links, Cascading Styles",
        "Bootstrap Framework",
      ],
    },
    {
      title: "💡DOM Event Fundamentals",
      topics: [
        "Flex and Display Properties",
        "Variables, Operators, Data Types",
        "ASSESSMENT-1",
      ],
    },
    {
      title: "💡 Database and MySQL",
      topics: [
        "Conditional Statements, Loops",
        "Functions, Strings, Events",
        "Arrays, Array methods, Objects",
      ],
    },
    {
      title: "💡 Web Development Best Practices",
      topics: [
        "Date Formats, Arrow Functions",
        "DOM tree, DOM methods and Elements",
        "QUIZ - 1",
      ],
    },
    {
      title: "💡Final project",
      topics: [
        "DOM forms, dynamic elements",
        "Event Listeners, inline, outline, addEventListener",
        "Keyboard events",
      ],
    },
    {
      title: "💡ReactJS,NodeJS",
      topics: [
        "Basics of React",
        "Bundlers & Packages: NPM, Parcel, Vite",
        "What is JSX & Props in React",
        "Component in React and Working with Lists",
        "Hooks in React useState()",
        "What is Micro Service, useEffect() with Axios",
        "React Router Dom V6 Related",
        "React Optimization",
        "Way to Style and Create Responsive Components",
        "React Context API",
        "Server-Side Programming -Node.js",
      ],
    },
    {
      title: "💡 Databases Types",
      topics: [
        "Project Assignment",
        "Introduction to Database",
        "MySQL Commands (DDL, DML, DCL, TCL)",
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
      title: "💡  Web Server and Security",
      topics: [
        "Web Servers & Web Security",
        "Conditional Statements in JavaScript",
        "Project Review",
      ],
    },
    {
      title: "💡 Performance Enhancement",
      topics: [
        "Performance & Search Engine Optimization",
        "Code Quality and Documentation",
        "Project Submission",
      ],
    },
  ];
  const scheduleData = [
    { week: "Week 1-4", topic: "Frontend Development" },
    { week: "Week 5-8", topic: "Backend Development" },
    { week: "Week 9-10", topic: "Database & API Integration" },
    { week: "Week 11-12", topic: "Project & Deployment" },
  ];
  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="Web Development"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Web Development" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About Web Development</h2>
          <p>
            Learn full-stack web development with **HTML, CSS, JavaScript,
            React, and Node.js. <br />
            Build dynamic websites and deploy them.
          </p>
          <Link to="/courses">
            <button className="explore-btn">Explore Course</button>
          </Link>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="MERN"
        subtitle="Full Stack"
        description="A Simple Guide to the World of Web Development ✨"
        keyPoints={[
          "🔥 Build Scalable Web Apps",
          "🚀 Learn React, Node.js, MongoDB",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"Courses/Full Stack poster.png"}
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
              "Empowering the next generation of developers with hands-on
              learning and real-world projects."
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

            <h3>What is MERN Stack?</h3>
            <p>
              MERN (MongoDB, Express.js, React.js, Node.js) is a powerful
              JavaScript technology stack used to build dynamic, full-stack web
              applications.
              <strong>MongoDB</strong> is a NoSQL database for efficient data
              storage, <strong>Express.js</strong> simplifies backend
              development,
              <strong>React.js</strong> provides a seamless frontend experience,
              and <strong>Node.js</strong> ensures high-performance server-side
              execution. This combination makes MERN a preferred choice for
              modern web applications, offering scalability, flexibility, and a
              fast development cycle.
            </p>
            <p>
              🚀 Exciting News! Join Our MERN Stack Mastery Program 🖥️🌟 Embark
              on an immersive journey into the ever-evolving world of web
              development with our comprehensive MERN Stack Training. This
              program offers hands-on experience, practical projects, and expert
              mentorship to take your coding skills to the next level. Ready to
              boost your web development prowess? Enroll now and transform your
              future! 🌐💡
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

export default WebDevelopment;
