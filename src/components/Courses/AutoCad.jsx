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

const AutoCad = () => {
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
      title: "💡 Introduction to AutoCAD Design",
      topics: [
        "AutoCAD is a global application. It is being used globally by product development teams, manufacturing facilities, medical professionals, in educational institutions, by professionals and engineers.",
      ],
    },
    {
      title: "💡 Drawing Basics",
      topics: [
        "The tutorial will help the users to get a basic understanding of the program and its practicality. The tutorial will allow the learners to know the program and apprehend the basic concepts required to create 2D and 3D designs on the program.",
      ],
    },
    {
      title: "💡  Drawing Aid",
      topics: [
        "The drawing aids in AutoCAD are like the triangles, compasses, and engineering scales of traditional drafting. Drawing aids are essential modes and methods of entering data that, once mastered, allow you to create measured drawings with ease.",
      ],
    },
    {
      title: "💡Multi-view Drawing",
      topics: [
        "Multi-view blocks typically represent 3D architectural objects. For example, you can create customized cabinetry by drawing plan, elevation, and model views, and saving each view as an individual AutoCAD block. You assign each block to a view when you create the multi-view block definition.",
      ],
    },
    {
      title: "💡 Dimension and Annotations",
      topics: [
        "Annotation objects provide information about a feature, such as the length of a wall, the diameter of a fastener, or a detail callout. Typically, annotation objects are scaled differently than the views of the drawing, and depend on the scale of how they should appear when plotted.",
        "ASSIGNMENT & QUIZ",
      ],
    },
    {
      title: "💡Parametric tools",
      topics: [
        "Parametric drawing tools that you can use to create dynamic relationships and constraints between objects in AutoCAD software. The parametric drawing tools will revolutionize the way that you draw and edit objects in AutoCAD software.",
      ],
    },
    {
      title: "💡Section Views",
      topics: [
        "A sectional view represents the part of an object remaining after a portion is assumed to have been cut and remove the exposed cut surface in then indicated by section lines.",
      ],
    },
    {
      title: "💡 Block & Attribute",
      topics: [
        "Image Processing & Image Segmentation",
        "An Attribute is an intelligent text attached to a block. It can be any information related to the block such as description, part name, and value and so on. The third part of the chapter deals with the Xrefs (external references).",
        "ASSESSMENT & QUIZ - 2",
      ],
    },
    {
      title: "💡  Layout & Annotative Objects",
      topics: [
        "Annotative objects and styles are used to control the size and scale at which annotation objects are displayed in model space or a layout. When using annotative objects, the process of scaling annotation objects is automated for you.",
      ],
    },
    {
      title: "💡 Template & Plotting",
      topics: [
        "When AutoCAD starts, the Start tab is displayed by default. Here, you can quickly start a new drawing file based on the current drawing template file, or you can specify a different template file from the Templates list to start a new drawing.",
      ],
    },
    {
      title: "💡 3D Basics Drawing",
      topics: [
        "A 3D model can include combinations of these technologies, and you can convert between them. For example, you can convert a primitive 3D solid pyramid to a 3D mesh to perform mesh smoothing. You can then convert the mesh to a 3D surface or back to a 3D solid to take advantage of their respective modeling features.",
        "Project Review",
      ],
    },
  ];
  const scheduleData = [
    { week: "Week 1-4", topic: "Introduction to AutoCAD" },
    { week: "Week 5-8", topic: "Basic Drafting and Modeling" },
    { week: "Week 9-10", topic: "Intermediate Techniques" },
    { week: "Week 11-12", topic: "Advanced AutoCAD Applications" },
  ];

  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="AutoCAD"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "AutoCAD" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About AutoCAD</h2>
          <p>
            AutoCAD courses focus on the use of data to drive business decisions
            and strategies.
          </p>
          <button className="explore-btn">Explore Course</button>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="Auto"
        subtitle="CAD"
        description="Transforming Ideas into Intuitive Experiences ✨"
        keyPoints={[
          "🔥 Introduction to AutoCAD ",
          "🚀  Basic Drafting and Modeling",
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
              "Explore the fascinating realm of AutoCAD, gain essential
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
            <h3>What is AutoCAD?</h3>
            <p>
              AutoCAD is a computer-aided design (CAD) software used by
              architects, engineers, and construction professionals to create
              precise 2D and 3D drawings. It provides tools for drafting,
              annotation, and modeling, enabling the creation of detailed
              architectural plans, mechanical parts, and complex structures. Key
              features include layers for organizing drawings, blocks for
              reusable content, and external references for collaborative work.
              AutoCAD also supports 3D modeling and rendering, allowing users to
              visualize their designs in three dimensions.
            </p>
            <p>
              🚀 Exciting News! Join Our AutoCAD Mastery Program 🏗️🌟 Embark on
              an immersive journey into the world of AutoCAD with our
              comprehensive training. This program offers hands-on experience,
              practical projects, and expert mentorship to elevate your CAD
              skills to the next level. Ready to unlock the power of design?
              Enroll now and transform your future! 🌐💡
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

export default AutoCad;
