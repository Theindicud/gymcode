import { Link } from "react-router-dom";

function RoutineItem({ routine }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{routine.name}</h5>
        <p className="card-text">
          <i className="fa fa-exclamation me-2"></i>
          {routine.difficulty}
        </p>
        <Link to={`/routines/${routine.id}`} className="stretched-link"/>
      </div>
    </div>
  );
}


export default RoutineItem;