import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./StatsCard.css";

const StatCard = ({ title, endValue, duration, isStatic, isRating }) => {
  const [count, setCount] = useState(isStatic ? endValue : 0);

  useEffect(() => {
    if (isStatic) return;

    let start = 0;
    const increment = endValue / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(timer);
        start = endValue;
      }
      setCount(Math.ceil(start));
    }, 10);

    return () => clearInterval(timer);
  }, [endValue, duration, isStatic]);

  return (
    <div className="stat-card">
      {isRating ? (
        <>
          <FcGoogle size={40} />
          <h3 className="stat-value">{endValue}</h3>
          <div className="stars">
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStar color="#FFD700" />
            <FaStarHalfAlt color="#FFD700" />
          </div>
        </>
      ) : (
        <>
          <h3 className="stat-value">
            {count}
            {isStatic ? "" : "+"}
          </h3>
          <p className="stat-title">{title}</p>
        </>
      )}
    </div>
  );
};

const StatsCardContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [logos, setLogos] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your API key
      const SHEET_ID = import.meta.env.VITE_SHEET_ID; // Replace with your Google Sheet ID
      const RANGE = "Sheet1!G2:G"; // Adjust the range to match your sheet
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
      // console.log(url);

      try {
        const response = await fetch(url);

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Check if data.values exists
        if (!data.values) {
          throw new Error("No data found in the sheet.");
        }

        const logoUrls = data.values.map((row) => row[0]);
        setLogos(logoUrls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Split logos into three rows
  const firstRowLogos = logos.slice(0, Math.ceil(logos.length / 3));
  const secondRowLogos = logos.slice(
    Math.ceil(logos.length / 3),
    Math.ceil((2 * logos.length) / 3)
  );
  const thirdRowLogos = logos.slice(Math.ceil((2 * logos.length) / 3));

  const firstRow = [...firstRowLogos, ...firstRowLogos];
  const secondRow = [...secondRowLogos, ...secondRowLogos];
  const thirdRow = [...thirdRowLogos, ...thirdRowLogos];
  return (
    <div className="stats-section">
      <div ref={containerRef} className="stats-container">
        {isVisible && (
          <div className="stats-grid">
            <StatCard title="Total Mentors" endValue={75} duration={2000} />
            <StatCard title="Total Students" endValue={11500} duration={2000} />
            <StatCard title="Total Courses" endValue={20} duration={2000} />
            <StatCard title="Total Projects" endValue={1000} duration={2000} />
            <StatCard title="Total Recruiters" endValue={60} duration={2000} />
            <StatCard endValue={4.5} isStatic isRating />
          </div>
        )}
      </div>

      <div className="companies-text">
        <h2>Companies You Can Join</h2>
      </div>
      <div className="companies-section">
        {/* First Row: Left to Right */}
        <div className="logos-row first-row">
          <div className="logos">
            {firstRow.map((logo, index) => (
              <img key={index} src={logo} alt={`Company Logo ${index}`} />
            ))}
          </div>
        </div>

        {/* Second Row: Right to Left */}
        <div className="logos-row second-row">
          <div className="logos">
            {thirdRow.map((logo, index) => (
              <img key={index} src={logo} alt={`Company Logo ${index}`} />
            ))}
          </div>
        </div>

        {/* Third Row: Left to Right */}
        <div className="logos-row third-row">
          <div className="logos">
            {secondRow.map((logo, index) => (
              <img key={index} src={logo} alt={`Company Logo ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCardContainer;
