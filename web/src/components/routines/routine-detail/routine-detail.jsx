function RoutineDetail({ name, description, difficulty, routineType, exercises, equipmentNecessary, owner }) {

    return (
        <section>
            <div className='routine-detail-container m-3'>
                <h2>{name}</h2>

                <p>{description}</p>
                <p>{difficulty}</p>
                <p>{routineType}</p>
                <p>{owner.name}</p>


                {exercises.map(exercise => 
                    (<div>
                        <h4>{exercises.name}</h4>
                        <section>{exercise.equipment.map(equipment => <div className="rounded-pill bg-black text-white text-center">{equipment}</div>)}</section>
                        <p>{exercise.series}</p>
                        <p>{exercise.repetitions}</p>
                        <p>{exercise.weight}</p>
                    
                    </div>)
                )}
            </div>
        </section>
    )

}

export default RoutineDetail;