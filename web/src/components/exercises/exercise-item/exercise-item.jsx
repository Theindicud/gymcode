import './exercise-item.css';

function ExerciseItem({ exercise }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{exercise.name}</h5>
                <p className="card-text"><i class="fa fa-hand-o-right" aria-hidden="true">&nbsp;</i>{exercise.bodyZone}</p>
            </div>
        </div>
    )
}

export default ExerciseItem;