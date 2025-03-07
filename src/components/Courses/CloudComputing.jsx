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

const CloudComputing = () => {
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
      title: "💡 Introduction to Cloud Computing",
      topics: [
        "Definition and characteristics of cloud computing",
        "History and evolution of cloud computing",
        "Benefits and challenges of cloud computing",
      ],
    },
    {
      title: "💡Cloud Service Models",
      topics: [
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)",
      ],
    },
    {
      title: "💡 Cloud Deployment Models",
      topics: [
        "Public cloud,Private cloud,Hybrid Cloud",
        "Community Cloud",
        "Selecting the right deployment model",
      ],
    },
    {
      title: "💡 Cloud Providers and Services",
      topics: [
        "Introduction to AWS, Azure, and Google Cloud",
        "Core services offered by each provider",
        "Pricing models and cost management",
      ],
    },
    {
      title: "💡 Setting Up Your Cloud Environment",
      topics: [
        "Creating and configuring cloud accounts",
        "Navigating cloud service dashboards",
        "Setting up virtual machines, storage, and networks",
      ],
    },
    {
      title: "💡 Cloud Storage and Databases",
      topics: [
        "Overview of cloud storage options",
        "Managing and configuring cloud storage",
        "Introduction to cloud databases",
      ],
    },
    {
      title: "💡 Cloud Security",
      topics: [
        "Understanding cloud security fundamentals.",
        "Identity and access management",
        "Data encryption and protection",
      ],
    },
    {
      title: "💡Cloud Networking",
      topics: [
        "Basics of cloud networking",
        "Configuring virtual networks",
        "Load balancing and scaling applications",
        "Network security and best practices",
      ],
    },
    {
      title: "💡Cloud Application Development",
      topics: [
        "Developing cloud-native applications",
        "Introduction to microservices architecture",
        "Containerization with Docker and Kubernetes",
      ],
    },
    {
      title: "💡Cloud Migration Strategies",
      topics: [
        "Assessing applications for cloud readiness",
        "Planning and executing a cloud migration",
        "Tools and best practices for migration",
        "Post-migration optimization",
      ],
    },
    {
      title: "💡Cloud Management and Monitoring",
      topics: [
        "Monitoring cloud infrastructure and applications",
        "Cost management and optimization",
        "Automation with cloud tools and scripts",
      ],
    },
  ];

  const scheduleData = [
    { week: "Week 1-4", topic: "Foundation and Core Concepts" },
    { week: "Week 5-6", topic: "Cloud Service Models" },
    { week: "Week 7", topic: "Analytics and Data Interpretation" },
    { week: "Week 8", topic: "Cloud Strategy and Capstone Project" },
  ];
  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="Cloud Computing "
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Cloud Computing" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About Cloud Computing </h2>
          <p>
            Cloud computing is the delivery of computing services—including
            servers, storage, databases, networking, software, analytics, and
            intelligence—over the Internet (the cloud) to offer faster
            innovation, flexible resources, and economies of scale.
          </p>
          <button className="explore-btn">Explore Course</button>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="Cloud"
        subtitle="Computing"
        description="Gain crucial skills and insights to excel in a digital-driven world. 🌐🚀"
        keyPoints={[
          "🔥 Scalability &  Cost-Efficiency",
          "🚀 Securrity & Reliability",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"Courses/cloud.png"}
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
              <h3>What is Cloud Computing?</h3>{" "}
              <p>
                {" "}
                Cloud computing is the delivery of computing services over the
                internet, offering on-demand access to resources such as
                servers, storage, databases, networking, software, and
                analytics. These services enable businesses and individuals to
                store and process data in remote data centers, reducing the need
                for on-site hardware and infrastructure.{" "}
                <strong>Infrastructure as a Service (IaaS)</strong> provides
                virtualized computing resources,{" "}
                <strong>Platform as a Service (PaaS)</strong> offers a platform
                for developing and deploying applications, and{" "}
                <strong>Software as a Service (SaaS)</strong> delivers software
                applications over the internet. Cloud computing is essential for
                scalability, flexibility, and cost-efficiency in today's
                technology-driven world.{" "}
              </p>{" "}
              <p>
                {" "}
                🌐 Exciting News! Join Our Cloud Computing Mastery Program ☁️🌟
                Embark on a transformative journey into the dynamic world of
                cloud computing with our comprehensive training. This program
                offers hands-on experience, real-world projects, and expert
                mentorship to elevate your skills to new heights. Ready to
                harness the power of cloud computing? Enroll now and shape the
                future! 🚀💡{" "}
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

export default CloudComputing;
