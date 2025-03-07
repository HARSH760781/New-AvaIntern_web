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

const Embedded = () => {
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
        title: "AutoCAD Course",
        text: "Check out this AutoCAD course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };
  const curriculumData = [
    {
      title: "💡Introduction to Embedded Systems",
      topics: [
        "Definition and scope of embedded systems",
        "Applications and examples of embedded systems",
        "Key components of embedded systems: microcontrollers, sensors, actuators, etc.",
      ],
    },
    {
      title: "💡Embedded Systems Development",
      topics: [
        "Development process for embedded systems",
        "Hardware and software co-design",
        "Embedded operating systems (e.g., FreeRTOS, VxWorks)",
      ],
    },
    {
      title: "💡 UI Design Fundamentals",
      topics: ["Persona Development", "User Journey Mapping", "Card Sorting"],
    },
    {
      title: "💡Embedded Systems Testing Overview",
      topics: [
        "Importance of testing in embedded systems",
        "Types of testing: unit, integration, system, and acceptance testing",
        "System testing methodologies",
        "Creating a test plan for embedded systems",
      ],
    },
    {
      title: "💡Creating a test plan for embedded systems",
      topics: [
        "Writing effective test cases",
        "Test case design techniques: equivalence partitioning, boundary value analysis, state transition testing",
        "Creating test data and preparing test environments",
      ],
    },
    {
      title: "💡Tools and Frameworks for Embedded System Testing",
      topics: [
        "Overview of popular testing tools (e.g., VectorCAST, LDRA, Tessy)",
        "Setting up and configuring testing tools",
        "Integrating testing tools with CI/CD pipelines",
      ],
    },
    {
      title: "💡Functional Testing of Embedded Systems",
      topics: [
        "Understanding functional testing",
        "Designing functional test cases",
        "Executing functional tests and analyzing results",
      ],
    },
    {
      title: "💡Performance Testing of Embedded Systems",
      topics: [
        "Introduction to performance testing",
        "Load testing, stress testing, and endurance testing",
        "Using performance testing tools (e.g., JMeter, LoadRunner)",
      ],
    },
    {
      title: "💡Security Testing of Embedded Systems",
      topics: [
        "Importance of security testing",
        "Types of security testing: vulnerability scanning, penetration testing, security auditing",
        "Tools for security testing (e.g., OWASP ZAP, Burp Suite)",
      ],
    },
    {
      title: "💡  Setting Up an Embedded Testing Environment",
      topics: [
        "Step-by-step guide to setting up test environments for embedded systems",
        "Configuring testing tools and frameworks",
      ],
    },
    {
      title: "💡 Functional Testing Project",
      topics: [
        "Designing and executing functional test cases for an embedded application",
        "Documenting and reporting functional test results",
        "Project Review",
      ],
    },
  ];
  const scheduleData = [
    { week: "Week 1-4", topic: " Introduction to Embedded Systems" },
    { week: "Week 5-8", topic: "Embedded System Hardware" },
    { week: "Week 9-10", topic: "Embedded System Software" },
    { week: "Week 11-12", topic: "Advanced Embedded Applications" },
  ];

  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="Embedded System"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Embedded System" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About Embedded System</h2>
          <p>
            This course provides a comprehensive introduction to embedded
            systems, with a special focus on system testing. Students will learn
            the fundamentals of embedded systems
          </p>
          <Link to="/courses">
            <button className="explore-btn">Explore Course</button>
          </Link>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="Embedded/"
        subtitle="System"
        description="Transforming Ideas into Intuitive Experiences ✨"
        keyPoints={[
          "🔥 Real-time operating systems (RTOS) basics",
          "🚀 Power management techniques",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"Courses/Embedded System.png"}
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
              "Explore the fascinating realm of Embedded System, gain essential
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
            <h3>What is Embedded Systems?</h3>
            <p>
              Embedded systems are specialized computing systems designed to
              perform dedicated functions within larger electronic devices. They
              are integral to modern technology, enabling the functionality of
              everyday devices such as smartphones, automotive systems, medical
              equipment, and home appliances. Embedded systems combine hardware
              and software components, including microcontrollers, sensors, and
              real-time operating systems, to execute specific tasks efficiently
              and reliably. Key aspects of embedded systems include low power
              consumption, real-time performance, and integration with other
              hardware components.
            </p>
            <p>
              🚀 Exciting News! Join Our Embedded Systems Mastery Program 🛠️🌟
              Embark on an immersive journey into the world of embedded systems
              with our comprehensive training. This program offers hands-on
              experience, practical projects, and expert mentorship to elevate
              your embedded systems skills to the next level. Ready to unlock
              the power of technology? Enroll now and transform your future!
              🌐💡
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

export default Embedded;
