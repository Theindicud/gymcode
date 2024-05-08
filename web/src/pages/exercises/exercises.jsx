import ExercisesList from "../../components/exercises/exercises-list/exercises-list";

function Exercises() {
  return (
    <div className="exercises-container">
      <h2>Ejercicios</h2>
      <ExercisesList limit={3} />
    </div>
  );
}

export default Exercises;