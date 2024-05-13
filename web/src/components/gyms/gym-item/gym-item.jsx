import { Link } from "react-router-dom";

function GymItem({ gym }) {
    return (
        <div className="card">
      <div className="card-body">
        <h5 className="card-title">{gym.name}</h5>
        <h5 className="card-title">{gym.facilities}</h5>
        <h5 className="card-title">{gym.address}</h5>
      </div>
    </div>
    )
}

export default GymItem;