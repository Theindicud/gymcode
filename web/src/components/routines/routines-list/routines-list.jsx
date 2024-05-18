import { useEffect, useState } from "react";
import { getRoutines } from "../../../services/api.service";
import RoutineCard from "../routine-card/routine-card";
import "./routines-list.css";

function RoutinesList({
  equipmentNecessary,
  limit,
  page,
}) {
  const [routines, setRoutines] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
  const [routineType, setRoutineType] = useState(null);

  useEffect(() => {
    async function fetchRoutines() {
      try {
        const query = {};
        if (routineType) query.routineType = routineType;
        if (difficulty) query.difficulty = difficulty;
        if (equipmentNecessary) query.equipmentNecessary = equipmentNecessary;
        if (limit) query.limit = limit;
        if (page) query.page = page;

        const response = await getRoutines(query);
        setRoutines(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRoutines();
  }, [routineType, difficulty, equipmentNecessary, limit, page]);

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleRoutineTypeChange = (event) => {
    setRoutineType(event.target.value);
  }

  return (
    <>
      <div className="filter-container">

        <div className="radio-inputs">
          <label>
            <input className="radio-input" type="radio" name="routineType" value="Aeróbico"  checked={routineType === "Aeróbico"} onChange={handleRoutineTypeChange}/>
              <span className="radio-icon">
                <img src="https://res.cloudinary.com/dznumjlzc/image/upload/v1716027869/gymcode/icons/cardio_itzjbv.svg" alt="Cardio" className="radio-icon" />
              </span>
          </label>
          <label>
            <input className="radio-input" type="radio" name="routineType" value="Fuerza" checked={routineType === "Fuerza"} onChange={handleRoutineTypeChange}/>
              <span className="radio-icon">
                <img src="https://res.cloudinary.com/dznumjlzc/image/upload/v1716027867/gymcode/icons/mancuerna_k9ymeg.svg" alt="Fuerza" className="radio-icon" />
              </span>
          </label>
          <label>
            <input className="radio-input" type="radio" name="routineType" value="Resistencia" checked={routineType === "Resistencia"}  onChange={handleRoutineTypeChange}/> 
              <span className="radio-icon">
                <img src="https://res.cloudinary.com/dznumjlzc/image/upload/v1716027867/gymcode/icons/bicicleta_keg8d0.svg" alt="Resistencia" className="radio-icon" />
              </span>
          </label>
          <label>
            <input className="radio-input" type="radio" name="routineType" value="Flexibilidad" checked={routineType === "Flexibilidad"}  onChange={handleRoutineTypeChange}/> 
              <span className="radio-icon">
                <img src="https://res.cloudinary.com/dznumjlzc/image/upload/v1716027867/gymcode/icons/extendido_vkuzkr.svg" alt="Flexibilidad" className="radio-icon" />
              </span>
          </label>
          <label>
            <input className="radio-input" type="radio" name="routineType" value="Otro" checked={routineType === "Otro"}  onChange={handleRoutineTypeChange}/> 
              <span className="radio-icon">
                <img src="https://res.cloudinary.com/dznumjlzc/image/upload/v1716029594/gymcode/icons/pregunta_hsfdpv.svg" alt="Otros" className="radio-icon" />
              </span>
          </label>
        </div>



        <div className="wrapper">
          <div className="option">
            <input
              className="input"
              type="radio"
              name="difficulty"
              value="Principiante"
              checked={difficulty === "Principiante"}
              onChange={handleDifficultyChange}
            />
            <div className="btn-routines-filter">
              <span className="span"><strong>Principiante</strong></span>
            </div>
          </div>
          <div className="option">
            <input
              className="input"
              type="radio"
              name="difficulty"
              value="Intermedio"
              checked={difficulty === "Intermedio"}
              onChange={handleDifficultyChange}
            />
            <div className="btn-routines-filter">
              <span className="span"><strong>Intermedio</strong></span>
            </div>
          </div>
          <div className="option">
            <input
              className="input"
              type="radio"
              name="difficulty"
              value="Experto"
              checked={difficulty === "Experto"}
              onChange={handleDifficultyChange}
            />
            <div className="btn-routines-filter">
              <span className="span"><strong>Experto</strong></span>
            </div>
          </div>
        </div>
      </div>

        <div className="routines-list-container">
          <div className="row">
            {routines.map((routine) => (
              <RoutineCard key={routine.id} routine={routine} />
            ))}
          </div>
        </div>
    </>
  );
}

export default RoutinesList;
