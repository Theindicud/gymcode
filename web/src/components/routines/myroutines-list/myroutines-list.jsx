import RoutineCard from "../routine-card/routine-card";
import { myRoutines } from "../../../services/api.service";
import { useEffect, useState } from "react";

function MyRoutinesList({ routine }) {
  const [userRoutines, setUserRoutines] = useState([]);

  useEffect(() => {
    async function fetchMyRoutines() {
      try {
        const myRoutinesResponse = await myRoutines();
        setUserRoutines(myRoutinesResponse.data);
      } catch (error) {
        console.error("Error al obtener las rutinas del usuario:", error);
      }
    }

    fetchMyRoutines();
  }, []);
  return (
    <div className="routines-list-container">
      <div className="row">
        {userRoutines.map((r) => (
            <RoutineCard routine={r} />
        ))}
      </div>
    </div>
  );
}

export default MyRoutinesList;
