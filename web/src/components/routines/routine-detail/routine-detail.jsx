import "./routine-detail.css";
import { Link, useNavigate } from "react-router-dom";
import { getRoutines, createSubscription, removeSubscription, checkSubscription } from "../../../services/api.service";
import { useState, useEffect } from 'react';

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
  const [isSubscribed, setIsSubscribed] = useState(false); // Estado para manejar la suscripción
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const response = await checkSubscription(id);
        setIsSubscribed(response.data.isSubscribed);
      } catch (error) {
        console.error("Error checking subscription status:", error);
      }
    };

    fetchSubscriptionStatus();
  }, [id]);

  const handleCreateSubs = async () => {
    setLoading(true);
    setMessage('');

    try {
      await createSubscription(id);
      setMessage('Suscripción exitosa');
      setIsSubscribed(true);
      navigate("/myroutines");
    } catch (error) {
      setMessage(`Fallo en la suscripción: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveSubs = async () => {
    setLoading(true);
    setMessage('');

    try {
      await removeSubscription(id);
      setMessage('Desuscripción exitosa');
      setIsSubscribed(false);
      navigate("/myroutines");
    } catch (error) {
      setMessage(`Fallo en la desuscripción: ${error.message}`);
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
                <strong>Tipo de rutina: </strong>
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
              {isSubscribed ? (
                <button onClick={handleRemoveSubs} className="sub-button">
                  Desuscribirse de la rutina
                </button>
              ) : (
                <button onClick={handleCreateSubs} className="sub-button">
                  Añadir a mis rutinas
                </button>
              )}
            </div>
            {loading && <p>Loading...</p>}
            {message && <p>{message}</p>}
          </div>
        </div>
      </section>
    </>
  );
}

export default RoutineDetail;
