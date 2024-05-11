function RoutineDetail({ name, description, difficulty, routineType, exercises, owner }) {

    return (
        <section>
            <div className='routine-detail-container m-3'>
                <h2>{name}</h2>

                <p>{description}</p>
                <p>{difficulty}</p>
                <p>{routineType}</p>
                <p>{owner.name}</p>

                {exercises.map(e => 
                    (<div>
                        <p>{e.exercise.name}</p>
                        <section>{e.equipment.map(equipment => <div className="rounded-pill bg-black text-white text-center">{equipment}</div>)}</section>

                        <p>{e.series}</p>
                        <p>{e.repetitions}</p>
                        <p>{e.weight}</p>
                    
                    </div>)
                )}
            </div>
        </section>
    )

}

export default RoutineDetail;