import { useEffect, useState } from "react";
import { getRoutines } from "../../../services/api.service";
import RoutineItem from "../routine-item/routine-item";
import { Link } from "react-router-dom";
import "./routines-list.css";

function RoutinesList({
  routineType,
  difficulty,
  equipmentNecessary,
  limit,
  page,
}) {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    async function fetch() {
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
    fetch();
  }, [routineType, difficulty, equipmentNecessary, limit]);

  return (
    <>
      <div className="routines-list-container">
        <div className="title-container">
          <h1 className="title">NUESTRAS MEJORES</h1>
          <h1 className="subtitle">
             RUTINAS
          </h1>
        </div>
        <div className="row row-columns-3">
          {routines.map((routine) => (
            <Link
              key={routine.id}
              to={`/routines/${routine.id}`}
              className="col text-decoration-none"
            >
              <RoutineItem routine={routine} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default RoutinesList;
