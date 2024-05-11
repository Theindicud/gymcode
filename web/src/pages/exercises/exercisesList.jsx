import { Link, useParams } from "react-router-dom";
import ExercisesList from "../../components/exercises/exercises-list/exercises-list";

function Exercises() {
  return (
    <div className="exercises-container">
      <h2>Ejercicios</h2>
      <ExercisesList/>
      
    </div>
  );
}

export default Exercises;