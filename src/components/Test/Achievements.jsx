import React from "react";
import "./Achievements.css";

const Achievements = () => {
  const stats = [
    { icon: "📘", value: "6+", label: "Courses Offered" },
    { icon: "🎓", value: "1600+", label: "Students Mentored" },
    { icon: "🏆", value: "900+", label: "Sessions Completed" },
    { icon: "💬", value: "98%", label: "Positive Feedbacks" },
  ];

  return (
    <div className="achievements">
      {/* Header Section */}
      <div className="header">
        <p className="subtitle">start to success</p>
        <h2>
          What we Achieve <span className="highlight">with Avaintern?</span>
        </h2>
      </div>

      {/* Cards Section */}
      <div className="stats-cards">
        {stats.map((stat, index) => (
          <div className="card" key={index}>
            <div className="icon">{stat.icon}</div>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
