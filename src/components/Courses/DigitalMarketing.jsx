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

const DigitalMarketing = () => {
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
      title: "💡 Introduction of Marketing",
      topics: ["Introduction", "Market Research"],
    },
    {
      title: "💡Website Building",
      topics: [
        "Install wordpress,Theme",
        "Configuring IntelliJ IDEA - WINDOWS, MAC and LINUX",
        "Hello World in IntelliJ",
      ],
    },
    {
      title: "💡 Search Engine Optimizations(SEO)",
      topics: [
        "SEO Explained",
        "How to Keyword Research",
        "Create SEO-Friendly Content",
        "On-Page SEO",
      ],
    },
    {
      title: "💡 Introduction Opencv and Matplotlib",
      topics: ["Array ManipulatioN", "Indexing", "ASSESSMENT & QUIZ -1"],
    },
    {
      title: "💡 Email Marketing",
      topics: [
        "Email marketing is a digital marketing strategy that involves sending targeted emails to a group of subscribers or customers. It aims to build relationships, engage with the audience, and promote products or services. Email marketing campaigns can include newsletters, promotional offers, personalized recommendations, event invitations, or follow-up messages. Effective email marketing involves creating compelling content, segmenting the audience, optimizing email design for different devices, and analyzing metrics like open rates, click-through rates, and conversions to measure success.",
      ],
    },
    {
      title: "💡 Affiliate Marketing",
      topics: [
        "Affiliate marketing is a performance-based marketing strategy where affiliates promote products or services on behalf of a company in exchange for a commission. Affiliates earn a commission for every sale, lead, or action generated through their referral. It typically involves three parties: the merchant (company or product owner), the affiliate (individual or business promoting the products), and the customer. ",
      ],
    },
    {
      title: "💡Paid Social & seach Advertising Marketing",
      topics: [
        "Paid social advertising refers to the practice of promoting products, services, or content through paid advertisements on social media platforms. It involves creating targeted ad campaigns, selecting specific audience demographics, and utilizing the advertising features offered by platforms like Facebook, Instagram, Twitter, LinkedIn, and others to reach and engage with potential customers.",
      ],
    },
    {
      title: "💡Freelancing & Mobile Marketing",
      topics: [
        "Freelancing refers to working independently and offering services to clients on a contractual basis, often remotely. It provides individuals the flexibility to choose their projects, set their own rates, and work from anywhere. ",
      ],
    },
    {
      title: "💡Introduction to Google Analytics & tools",
      topics: [
        "Google Analytics is a powerful web analytics tool that provides insights into website traffic, user behavior, and conversion tracking. It offers a wide range of features and tools to measure website performance, track marketing campaigns, analyze audience demographics, and optimize website content for better user experience and business results.",
      ],
    },
  ];

  const scheduleData = [
    { week: "Week 1-4", topic: " Foundation and Core Concepts" },
    { week: "Week 5-8", topic: " Advanced Techniques and Tool" },
    { week: "Week 9-10", topic: "Analytics and Data Interpretation" },
    {
      week: "Week 11-12",
      topic: "Digital Marketing Strategy and Capstone Project",
    },
  ];
  return (
    <div className="web-dev-container">
      {/* Header Section */}
      <CourseHeader
        title="Digital Marketing"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Courses", link: "/courses" },
          { label: "Digital Marketing " },
        ]}
      />

      {/* Course Content Section */}
      <div className="course-content">
        <div className="course-text">
          <h2>About Digital Marketing </h2>
          <p>
            Discover ways to scale your commercial enterprise with the assist of
            a click on. Recognize the principles of digital advertising and
            decorate your enterprise prospects with revel in in jogging
            beneficial advertising campaigns.
          </p>
          <button className="explore-btn">Explore Course</button>
        </div>
      </div>

      {/* Course Details Section */}
      <CourseDetails
        courseUrl={courseUrl}
        title="Digital"
        subtitle="Marketing"
        description="Gain crucial skills and insights to excel in a digital-driven world. 🌐🚀"
        keyPoints={[
          "🔥 Content Creation",
          "🚀 SEO (Search Engine Optimization)",
          "💼 Hands-on Real Projects",
        ]}
        imageUrl={"Coures/DIGITAL MARKETING.png"}
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
              <h3>What is Digital Marketing?</h3>{" "}
              <p>
                {" "}
                Digital marketing is an umbrella term that encompasses all
                online marketing efforts aimed at promoting products, services,
                or brands. It involves leveraging digital channels such as
                search engines, social media, email, and websites to reach and
                engage with target audiences. <strong>
                  Content creation
                </strong>{" "}
                involves developing valuable and relevant content,{" "}
                <strong>SEO (Search Engine Optimization)</strong> ensures that
                content ranks well on search engines, and{" "}
                <strong>social media marketing</strong> helps connect with
                audiences on platforms like Facebook, Instagram, and Twitter.
                Techniques like <strong>pay-per-click (PPC) advertising</strong>{" "}
                and <strong>email marketing</strong> are used to drive traffic
                and conversions, making digital marketing essential in today's
                interconnected world.{" "}
              </p>{" "}
              <p>
                {" "}
                🌐 Exciting News! Join Our Digital Marketing Mastery Program
                📈🌟 Embark on a transformative journey into the vibrant world
                of digital marketing with our comprehensive training. This
                program offers hands-on experience, real-world projects, and
                expert mentorship to elevate your skills to new heights. Ready
                to harness the power of digital marketing? Enroll now and shape
                the future! 💡🚀{" "}
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

export default DigitalMarketing;
