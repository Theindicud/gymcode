import React from "react";
import { Link } from "react-router-dom";
import "./routine-card.css"; // Import the CSS file

function RoutineCard({ routine }) {
  return (
    <Link
      to={`/routines/${routine.id}`}
      className="article-wrapper text-decoration-none"
    >
      <div className="project-info">
        <div className="flex-pr">
          <div className="project-title">{routine.name}</div>
          <div className="project-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              color="black"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <line y2="12" x2="19" y1="12" x1="5"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
        <div className="types">
          <span className="project-type">• {routine.routineType}</span>
          <span className="project-type">• {routine.difficulty}</span>
        </div>
      </div>
    </Link>
  );
}

export default RoutineCard;
