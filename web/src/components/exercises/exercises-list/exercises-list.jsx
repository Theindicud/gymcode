import ExerciseItem from "../exercise-item/exercise-item";
import { useEffect, useState } from "react";
import { getExercise } from "../../../services/api.service";
import { get } from "react-hook-form";
import { Link } from "react-router-dom";

function ExercisesList({ description, bodyZone, limit, page }) {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        async function fetch() {
            try {
                const query = {};
                if (description) query.description = description;
                if (bodyZone) query.bodyZone = bodyZone;
                if (limit) query.limit = limit;
                if (page) query.page = page;

                const { data: exercises } = await getExercises(query);
                setExercises(exercises);
            } catch (error) {
                console.error(error)
            }
        }
        fetch();
    }, [description, bodyZone, limit]);


    return (
        <>
            <div className="container-exercises">
                <div className="row row-colums-3">

                    {exercises.map((exercise) =>
                        <div key={exercise.id} className="col">
                            <ExerciseItem exercise={exercise} />
                        </div>
                    )}
                </div>
            </div>
        </>


    )
}


export default ExercisesList;