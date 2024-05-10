import { useEffect, useState } from "react";
import { getRoutines } from "../../../services/api.service";
import RoutineItem from "../routine-item/routine-item";

function RoutinesList({ routineType, difficulty, equipmentNecessary, limit, page }) {
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

        <div className="row row-columns-3">

            {routines.map((routine) => (
                <div key={routine.id} className="col"><RoutineItem routine={routine} /></div>
            ))}
        </div>
        </>

    )
}

export default RoutinesList;