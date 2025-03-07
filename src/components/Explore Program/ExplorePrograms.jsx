import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaTools, FaProjectDiagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./ExplorePrograms.css";

const programs = {
  freelancing: {
    title: "Freelancing Opportunities",
    about: (
      <>
        Freelancing empowers you to work independently, choose your projects,
        and earn remotely without geographical limitations. It provides:
        <ul>
          <li>
            ✅ <b>Flexible Work Schedule</b> – Set your own hours and work at
            your convenience.
          </li>
          <li>
            ✅ <b>Diverse Opportunities</b> – Work with global clients across
            multiple industries.
          </li>
          <li>
            ✅ <b>Unlimited Earning Potential</b> – Get paid per project,
            hourly, or on a retainer basis.
          </li>
          <li>
            ✅ <b>Skill-Based Growth</b> – Specialize in high-demand skills like
            web development, content writing, and digital marketing.
          </li>
          <li>
            ✅ <b>Freedom & Autonomy</b> – Be your own boss, manage your
            workload, and scale your career at your own pace.
          </li>
        </ul>
        With freelancing, you can turn your passion into a profession while
        enjoying work-life balance and financial independence. 🚀
      </>
    ),
    provides: [
      { icon: <FaTools />, text: "Skill Development" },
      { icon: <FaChalkboardTeacher />, text: "Live Workshops" },
      { icon: <FaProjectDiagram />, text: "Real-World Projects" },
    ],
    image: "/images/freelancing.jpg",
  },
  mentorship: {
    title: "Expert Mentorship",
    about: (
      <>
        Our mentorship program connects learners with industry experts to
        accelerate career growth.
        <ul>
          <li>
            ✅ <b>1-on-1 Guidance</b> – Get personalized mentoring sessions from
            experienced professionals.
          </li>
          <li>
            ✅ <b>Career Roadmap</b> – Learn industry-relevant skills and gain
            real-world insights.
          </li>
          <li>
            ✅ <b>Interview Preparation</b> – Crack job interviews with expert
            guidance.
          </li>
          <li>
            ✅ <b>Exclusive Learning Resources</b> – Access premium materials
            and real-world case studies.
          </li>
          <li>
            ✅ <b>Networking Opportunities</b> – Connect with professionals and
            industry leaders.
          </li>
        </ul>
        Gain practical knowledge and accelerate your career with the right
        mentorship. 🎯
      </>
    ),
    provides: [
      { icon: <FaChalkboardTeacher />, text: "Personalized Guidance" },
      { icon: <FaProjectDiagram />, text: "Career Roadmap" },
      { icon: <FaTools />, text: "Hands-on Training" },
    ],
    image: "/images/mentorship.jpg",
  },
  projects: {
    title: "Hands-on Projects",
    about: (
      <>
        Work on real-world projects to gain hands-on experience and showcase
        your skills.
        <ul>
          <li>
            ✅ <b>Live Industry Projects</b> – Work on actual projects used by
            businesses.
          </li>
          <li>
            ✅ <b>Collaborative Learning</b> – Team up with peers to build
            impactful solutions.
          </li>
          <li>
            ✅ <b>Portfolio Building</b> – Create an impressive portfolio to
            attract employers and clients.
          </li>
          <li>
            ✅ <b>Certification</b> – Earn certificates to boost your resume.
          </li>
          <li>
            ✅ <b>Practical Exposure</b> – Apply your knowledge in real-world
            scenarios.
          </li>
        </ul>
        Enhance your technical and problem-solving skills with practical
        projects. 🏆
      </>
    ),
    provides: [
      { icon: <FaProjectDiagram />, text: "Industry-Level Projects" },
      { icon: <FaTools />, text: "Tech Stack Implementation" },
      { icon: <FaChalkboardTeacher />, text: "Project Reviews & Feedback" },
    ],
    image: "/images/project.jpg",
  },
};

const ExplorePrograms = () => {
  const [activeMenu, setActiveMenu] = useState("freelancing");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      className="explore-programs"
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Explore Our Programs</h2>

      {/* Menu Tabs */}
      <div className="menu-tabs">
        {Object.keys(programs).map((key) => (
          <button
            key={key}
            className={`menu-btn ${activeMenu === key ? "active" : ""}`}
            onClick={() => setActiveMenu(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <motion.div
        key={activeMenu}
        className="content"
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-content">
          <h3>{programs[activeMenu].title}</h3>
          <p className="about">{programs[activeMenu].about}</p>

          <div className="provides">
            {programs[activeMenu].provides.map((item, index) => (
              <div key={index} className="provide-item">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.img
          src={programs[activeMenu].image}
          alt={activeMenu}
          className="program-img"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ExplorePrograms;
