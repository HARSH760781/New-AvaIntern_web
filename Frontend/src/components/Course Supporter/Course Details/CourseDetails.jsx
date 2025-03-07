import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CourseDetails.css";
import {
  AccessTime as AccessTimeIcon,
  AttachMoney as AttachMoneyIcon,
  EventAvailable as EventAvailableIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  Share as ShareIcon,
  ContentCopy as ContentCopyIcon,
  WhatsApp as WhatsAppIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";

const CourseDetails = ({
  courseUrl,
  title,
  subtitle,
  description,
  keyPoints,
  imageUrl,
}) => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const navigate = useNavigate();

  // Copy course link
  const copyToClipboard = () => {
    navigator.clipboard.writeText(courseUrl);
    alert("Course link copied!");
  };

  // Handle Enroll Click
  const handleEnrollClick = () => {
    const currentPath = window.location.pathname; // Get current page URL path
    navigate(`${currentPath}/enroll`); // Append /enroll to the current path
  };

  // Handle sharing
  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: `Check out this ${title} course!`,
        url: courseUrl,
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  return (
    <div className="course-details">
      {/* Left - Course Description */}
      <div className="course-left">
        <div className="course-about">
          <h2>
            <span>
              <strong>{title} </strong>
            </span>
            <u>{subtitle}</u>
          </h2>
          <p>{description}</p>

          {/* Key Points */}
          <div className="key-points">
            {keyPoints.map((point, index) => (
              <span key={index}> {point}</span>
            ))}
          </div>
        </div>

        {/* Course Advantages */}
        <div className="course-advantages">
          <h3>Why Choose This Course?</h3>
          <ul>
            <li>✔️ Industry-Relevant Curriculum</li>
            <li>✔️ Expert Instructors</li>
            <li>✔️ Real-world Projects</li>
            <li>✔️ Placement Assistance</li>
            <li>✔️ Flexible Learning Schedule</li>
          </ul>

          <div className="rating-share">
            {/* Star Rating */}
            <div className="star-rating">
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <span> (4.9/5)</span>
            </div>

            {/* Share Icon */}
            <button className="share-btn" onClick={handleNativeShare}>
              <ShareIcon /> Share Course
            </button>

            {/* Share Options */}
            {showShareOptions && (
              <div className="share-options">
                <button onClick={copyToClipboard}>
                  <ContentCopyIcon /> Copy Link
                </button>
                <a
                  href={`https://api.whatsapp.com/send?text=Check%20out%20this%20course!%20${courseUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${courseUrl}&text=Check%20out%20this%20awesome%20${title}%20course!`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon /> Twitter
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right - Course Info */}
      <div className="course-info">
        <div className="info-image">
          <img src={`/images/${imageUrl}`} alt={title} />
        </div>
        <div className="info-details">
          <div className="info-list">
            <div className="info-item">
              <AccessTimeIcon />
              <strong>Duration:</strong>
              <span>12 Weeks</span>
            </div>
            <div className="info-item">
              <AttachMoneyIcon />
              <strong>Price:</strong>
              <span>₹11,999</span>
            </div>
            <div className="info-item">
              <EventAvailableIcon />
              <strong>Sessions:</strong>
              <span>Live & Recorded</span>
            </div>
            <div className="info-item">
              <WorkspacePremiumIcon />
              <strong>Certification:</strong>
              <span>Yes</span>
            </div>
            <div className="info-item">
              <CheckCircleIcon />
              <strong>Perks:</strong>
              <span>Internship, Job Assistance</span>
            </div>
          </div>
          <button className="enroll-btn" onClick={handleEnrollClick}>
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
