import "./routine-detail.css";
import { Link, useNavigate } from "react-router-dom";
import { getRoutines } from "../../../services/api.service";
import { useState } from 'react'
import { createSubscription } from "../../../services/api.service";

function RoutineDetail({
  name,
  description,
  difficulty,
  routineType,
  exercises,
  equipmentNecessary,
  id,
  owner,
}) {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleCreateSubs = async () => {
    setLoading(true);
    setMessage('');

    try {
      await createSubscription(id);
      setMessage('Suscripción exitosa');
      navigate("/myroutines");
    } catch (error) {
      setMessage(`Fallo en la suscripción: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <section className="parent-container">
        <div className="super-container-detail">
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
              <strong>Creada por {owner.name}</strong>
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
                {exercises?.map((exercise, index) => (
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
                    <td>{exercise.weight > 0 && exercise.weight}</td>
                    <td>{exercise.duration > 0 && exercise.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="container-button">
              <button onClick={() => handleCreateSubs(id)} className="sub-button ">Suscríbete</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}


export default RoutineDetail;
