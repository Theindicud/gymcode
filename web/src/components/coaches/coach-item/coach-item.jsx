import React from "react";
import { Link } from "react-router-dom";
import "./coach-item.css"; 

function CoachItem({ coach }) {
  return (
    <Link to={`/coaches/${coach.id}`}
    className="coach-wrapper"
    style={{ textDecoration: 'none' }}

    >
      <div className="super-container-coach" >
        <div className="coach-info">
          <div className="coach-flex-pr">
            <div className="coach-title">{coach.name} {coach.lastName}</div>
            <div className="coach-hover">
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
                aria-label="More Info"
              >
                <line y2="12" x2="19" y1="12" x1="5"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
          <div className="coaches-types">
            <span className="coach-type">• {coach.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CoachItem;
