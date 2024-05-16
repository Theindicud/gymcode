import React, { useEffect, useState } from "react";
import { getRoutines } from "../../../services/api.service";
import RoutineItem from "../routine-item/routine-item";
import { Link } from "react-router-dom";
import './routines-list-home.css'

function RoutinesListHome({
    routineType,
    difficulty,
    equipmentNecessary,
    limit,
    page,
}) {
    const [routines, setRoutines] = useState([]);
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const query = {};
                if (routineType) query.routineType = routineType;
                if (difficulty) query.difficulty = difficulty;
                if (equipmentNecessary) query.equipmentNecessary = equipmentNecessary;
                if (limit) query.limit = limit;
                if (page) query.page = page;

                const routinesResponse = await getRoutines(query);
                setRoutines(routinesResponse.data);

                const randomImagesResponse = await fetchRandomImages(routinesResponse.data.length);
                setRandomImages(randomImagesResponse);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [routineType, difficulty, equipmentNecessary, limit, page]);

    async function fetchRandomImages(count) {
        try {
            const imageUrls = [
                "https://res.cloudinary.com/dznumjlzc/image/upload/v1715860303/gymcode/routines/17_wtft4q.png",
                "https://res.cloudinary.com/dznumjlzc/image/upload/v1715860236/gymcode/routines/18_nbz2cv.png",
                "https://res.cloudinary.com/dznumjlzc/image/upload/v1715860234/gymcode/routines/16_fl2kir.png",
                "https://res.cloudinary.com/dznumjlzc/image/upload/v1715860234/gymcode/routines/15_llpzyb.png"
            ];

            const randomImages = [];
            for (let i = 0; i < count; i++) {
                const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
                randomImages.push(randomImageUrl);
            }

            return randomImages;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    return (
        <>
            <div className="routines-list-home-container">
                <div className="title-container-routine">
                    <h1 className="title-routine">Desata tu potencial</h1>
                    <h1 className="subtitle-routine">con nuestras rutinas </h1>
                </div>
                <div className="row row-columns-3 ">
                    {routines.map((routine, index) => (
                        <div key={routine.id} className="col">
                            <Link to={`/routines/${routine.id}`} className="text-decoration-none">
                                {randomImages[index] && <img src={randomImages[index]} alt="Random Routine"className="random-routine-image"/>}
                                <RoutineItem routine={routine} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default RoutinesListHome;
