import { Link } from "react-router-dom";

function CoachItem({ coach }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{coach.name}</h5>
        <p className="card-text">
        <i class="fa fa-user" aria-hidden="true"></i>
          {coach.lastName}
        </p>
      </div>
    </div>
  );
}


export default CoachItem;