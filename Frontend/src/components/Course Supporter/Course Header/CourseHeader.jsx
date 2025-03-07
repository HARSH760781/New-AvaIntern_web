import React from "react";
import { Link } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import DevicesIcon from "@mui/icons-material/Devices";
import "./CourseHeader.css";

const CourseHeader = ({ title, breadcrumbs }) => {
  return (
    <div className="course-header">
      <h1>{title}</h1>
      <div className="course-icons">
        <CodeIcon className="icon" />
        <WebIcon className="icon" />
        <DevicesIcon className="icon" />
      </div>
      <p className="breadcrumbs">
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            {crumb.link ? (
              <Link to={crumb.link}>{crumb.label}</Link>
            ) : (
              crumb.label
            )}
            {index < breadcrumbs.length - 1 && " > "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default CourseHeader;
