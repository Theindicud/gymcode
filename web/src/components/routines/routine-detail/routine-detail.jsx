import "./routine-detail.css";
import { Link } from "react-router-dom";
import { getRoutines } from "../../../services/api.service";

function RoutineDetail({
  name,
  description,
  difficulty,
  routineType,
  exercises,
  equipmentNecessary,
  owner,
}) {
  return (
    <section>
      <div className="routine-detail-container m-3">
        <h2>{name}</h2>

        <p>
          <strong>Descripción: </strong>
          {description}
        </p>
        <div className="span-routine-detail">
          <p>
            <strong>Dificultad: </strong>
            <span>{difficulty}</span>
          </p>
          <p>
            <strong>Description: </strong>
            <span>{routineType}</span>
          </p>
        </div>
        <p>
          <strong>Hecha por {owner.name}</strong>
        </p>

        <table className="table">
      <thead>
        <tr>
          <th>Nombre del Ejercicio</th>
          <th>Equipamiento</th>
          <th>Series</th>
          <th>Repeticiones</th>
          <th>Peso</th>
           <th>Duración</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise, index) => (
          <tr key={index}>
            <td>{exercise.exercise.name}</td>
            <td>
              {exercise.equipment.map((equipment, eqIndex) => (
                <div key={eqIndex} className="rounded-pill bg-black text-white text-center mb-1">
                  {equipment}
                </div>
              ))}
            </td>
            <td>{exercise.series}</td>
            <td>{exercise.repetitions}</td>
            <td>{exercise.weight !== undefined && exercise.weight !== 0 ? exercise.weight : ""}</td>
            <td>{exercise.duration !== undefined && exercise.duration !== 0 ? exercise.duration : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="container-button">
  <button className="rounded-pill-button bg-black text-white">Suscríbete</button>
</div>
      </div>

    </section>
  );
}

export default RoutineDetail;
