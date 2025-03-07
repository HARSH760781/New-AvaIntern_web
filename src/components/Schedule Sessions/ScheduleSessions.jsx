import React from "react";
import "./ScheduleStyles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ScheduleSessions = ({ schedule }) => {
  return (
    <div className="schedule-container">
      <h2>📅 Schedule & Sessions</h2>
      <div className="schedule-timeline">
        {schedule.map((session, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <CalendarMonthIcon />
            </div>
            <div className="timeline-content">
              <h3>{session.week}</h3>
              <p>{session.topic}</p>
            </div>
            <div className="timeline-status">
              <CheckCircleIcon className="completed-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSessions;
