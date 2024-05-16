import { Link } from "react-router-dom";
import './routine-item.css'

function RoutineItem({ routine }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{routine.name}</h5>
        <p className="card-text">
          <i className="fa fa-exclamation me-2"></i>
          {routine.difficulty}
        </p>
      </div>
    </div>
  );
}


export default RoutineItem;