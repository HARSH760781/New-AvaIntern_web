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

const DevOps = () => {
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
        title: "DevOps Course",
        text: "Check out this DevOps course!",
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const curriculumData = [
    {
      title: "💡Introduction to DevOps",
      topics: [
        "What is DevOps?",
        "DevOps Principles and Practices",
        "Benefits of DevOps in Software Development",
      ],
    },
    {
      title: "💡Version Control with Git",
      topics: [
        "Git Basics and Workflow",
        "Branching and Merging",
        "Collaborating with Git",
      ],
    },
    {
      title: "💡Continuous Integration and Continuous Deployment (CI/CD)",
      topics: [
        "Introduction to CI/CD Pipelines",
        "Tools: Jenkins, GitLab CI, CircleCI",
        "Automating Builds and Deployments",
      ],
    },
    {
      title: "💡Infrastructure as Code (IaC)",
      topics: [
        "Introduction to Terraform and CloudFormation",
        "Managing Infrastructure with Code",
        "Best Practices for IaC",
      ],
    },
    {
      title: "💡Containerization with Docker",
      topics: [
        "Docker Basics",
        "Creating and Managing Docker Containers",
        "Docker Compose and Orchestration",
      ],
    },
    {
      title: "💡Orchestration with Kubernetes",
      topics: [
        "Kubernetes Architecture",
        "Deploying Applications on Kubernetes",
        "Scaling and Managing Kubernetes Clusters",
      ],
    },
    {
      title: "💡Monitoring and Logging",
      topics: [
        "Introduction to Monitoring Tools (Prometheus, Grafana)",
        "Centralized Logging with ELK Stack",
        "Alerting and Incident Management",
      ],
    },
    {
      title: "💡Security in DevOps (DevSecOps)",
      topics: [
        "Integrating Security into CI/CD Pipelines",
        "Vulnerability Scanning and Management",
        "Security Best Practices",
      ],
    },
    {
      title: "💡Cloud Platforms and DevOps",
      topics: [
        "AWS, Azure, and GCP for DevOps",
        "Serverless Architectures",
        "Cloud-Native DevOps Practices",
      ],
    },
    {
      title: "💡DevOps Project",
      topics: [
        "End-to-End DevOps Pipeline Implementation",
        "Collaborating with Teams",
        "Project Review and Feedback",
      ],
    },
  ];

  const scheduleData = [
    { week: "Week 1-2", topic: "Introduction to DevOps" },
    { week: "Week 3-4", topic: "Version Control with Git" },
    { week: "Week 5-6", topic: "CI/CD Pipelines" },
    { week: "Week 7-8", topic: "Infrastructure as Code" },
    { week: "Week 9-10", topic: "Containerization with Docker" },
    { week: "Week 11-12", topic: "Orchestration with Kubernetes" },
  ];

  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="DevOps"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "DevOps" },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About DevOps</h2>
          <p>
            This course provides a comprehensive introduction to DevOps,
            covering key concepts, tools, and practices to streamline software
            development and deployment processes.
          </p>
          <Link to="/courses">
            <button className="explore-btn">Explore Course</button>
          </Link>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="DevOps/"
        subtitle="Mastery"
        description="Streamline Development and Operations ✨"
        keyPoints={[
          "🔥 CI/CD Pipelines",
          "🚀 Containerization with Docker",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"devops_hero.jpg"}
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
              "Master the art of DevOps, streamline your development processes,
              and deliver high-quality software faster and more efficiently."
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                🚀 <strong>Comprehensive Curriculum :</strong> "Learn the latest
                DevOps tools and practices."
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
            <h3>What is DevOps?</h3>
            <p>
              DevOps is a set of practices that combines software development
              (Dev) and IT operations (Ops) to shorten the development lifecycle
              and deliver high-quality software continuously. It emphasizes
              collaboration, automation, and monitoring throughout the software
              development process.
            </p>
            <p>
              🚀 Exciting News! Join Our DevOps Mastery Program 🛠️🌟 Embark on
              an immersive journey into the world of DevOps with our
              comprehensive training. This program offers hands-on experience,
              practical projects, and expert mentorship to elevate your DevOps
              skills to the next level. Ready to unlock the power of technology?
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

export default DevOps;
