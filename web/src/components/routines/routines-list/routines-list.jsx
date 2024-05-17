import { useEffect, useState } from "react";
import { getRoutines } from "../../../services/api.service";
import RoutineCard from "../routine-card/routine-card";
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
