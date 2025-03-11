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

const VLSI = () => {
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
      title: "💡 Introduction to UI-UX Design",
      topics: [
        "Overview of UI-UX Design",
        "Principles of Design",
        "The Role of UI-UX Designer",
      ],
    },
    {
      title: "💡 User Research and Analysis",
      topics: [
        "UX Research Methods",
        "The Design Thinking Process",
        "Understanding User Needs",
      ],
    },
    {
      title: "💡 UI Design Fundamentals",
      topics: ["Persona Development", "User Journey Mapping", "Card Sorting"],
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
      title: "💡 Interaction Design and Animation",
      topics: [
        "Layout Design",
        "Designing for Accessibility",
        "Design Software Overview (Sketch, Figma, Adobe XD)",
      ],
    },
    {
      title: "💡UX Design and Testing",
      topics: [
        "Wireframing and Prototyping",
        "Creating Interactive Mockups",
        "Design Handoff to Developers",
      ],
    },
    {
      title: "💡Design Systems and UI Kits",
      topics: [
        "Interaction Design Principles",
        "Creating Micro-interactions",
        "Animation Techniques",
      ],
    },
    {
      title: "💡 Final Project & Professional Development",
      topics: [
        "Designing for Mobile and Responsive Web",
        "Usability Testing & Heuristic Evaluation",
        "ASSESSMENT & QUIZ - 2",
        "A/B Testing",
      ],
    },
    {
      title: "💡  Final Project Part-2",
      topics: [
        "Project Assignment",
        "Designing for Scalability",
        "Collaborating with Developers",
      ],
    },
    {
      title: "💡  Final Project Part-3",
      topics: [
        "Creating UI Kits and Design Systems",
        "Component-Based Design",
        "Atomic Design Principles",
      ],
    },
    {
      title: "💡  Final Project Part-4",
      topics: [
        "Building a Portfolio",
        "Freelance vs Agency vs In-House",
        "Project Review",
      ],
    },
  ];
  const scheduleData = [
    { week: "Week 1-4", topic: " Introduction to UI/UX" },
    { week: "Week 5-8", topic: "Core UI/UX Techniques" },
    { week: "Week 9-10", topic: "Advanced UI/UX Techniques" },
    { week: "Week 11-12", topic: "Practical Applications and Projects" },
  ];

  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="UI/UX"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "UI/UX" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About UI/UX</h2>
          <p>
            A UI-UX design course typically focuses on the principles and
            practices of user interface (UI) and user experience (UX) design.
          </p>
          <Link to="/courses">
            <button className="explore-btn">Explore Course</button>
          </Link>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="UI/"
        subtitle="UX"
        description="Transforming Ideas into Intuitive Experiences ✨"
        keyPoints={[
          "🔥 UI/UX (ML) ",
          "🚀 Learn UI/UX Algorithms",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"Courses/UiUx.png"}
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
              "Explore the fascinating realm of UI/UX, gain essential insights,
              and understand the fundamentals that drive intelligent systems in
              today's innovative world."
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
            <h3>What is UI/UX?</h3>{" "}
            <p>
              {" "}
              UI/UX design focuses on creating intuitive and engaging user
              interfaces (UI) and user experiences (UX) for digital products and
              services. UI design involves the visual aspects of a product,
              including layout, colors, typography, and interactive elements,
              while UX design emphasizes the overall feel and usability of the
              product, ensuring a seamless and enjoyable experience for users.{" "}
              <strong>Wireframing</strong> is used to create basic layouts and
              structures, <strong>prototyping</strong> allows designers to build
              interactive models for testing, and <strong>user research</strong>{" "}
              helps understand user needs and behaviors. Effective UI/UX design
              is crucial for creating products that are not only functional but
              also delightful to use.{" "}
            </p>{" "}
            <p>
              {" "}
              🚀 Exciting News! Join Our UI/UX Mastery Program 🎨🌟 Embark on an
              immersive journey into the world of UI/UX with our comprehensive
              design training. This program offers hands-on experience,
              practical projects, and expert mentorship to elevate your UI/UX
              skills to the next level. Ready to unlock the power of design?
              Enroll now and transform your future! 🌐💡{" "}
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

export default VLSI;
