import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getExercise, createRoutine } from '../../services/api.service';
import { useAlert } from '../../contexts/alert.context';

import './routineCreate.css';

function CreateRoutineForm() {
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const { fields, append, remove } = useFieldArray({ control, name: "exercises" });
    const [exercises, setExercises] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredExercises, setFilteredExercises] = useState([]);
    const [showNewExerciseFields, setShowNewExerciseFields] = useState(false);
    const navigate = useNavigate();
    const { showAlert } = useAlert();

    const toggleNewExerciseFields = () => {
        setShowNewExerciseFields(!showNewExerciseFields);
    };

    useEffect(() => {
        async function fetchExercises() {
            try {
                const response = await getExercise();
                setExercises(response.data);
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        }

        fetchExercises();
    }, []);

    useEffect(() => {
        setFilteredExercises(
            exercises.filter((exercise) =>
                exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, exercises]);

    const onSubmitHandler = async (formData) => {
        try {
            await createRoutine(formData);
            navigate("/myroutines");
            showAlert("Rutina creada exitosamente");
        } catch (error) {
            showAlert(`Error al crear la rutina: ${error.message}`);
        }
    };

    const toggleExerciseSelection = (exercise) => {
        const exerciseIndex = fields.findIndex(item => item.name === exercise.name);
        if (exerciseIndex === -1) {
            append({
                name: exercise.name,
                equipment: exercise.equipment
            });
        } else {
            remove(exerciseIndex);
        }
    };

    const isExerciseSelected = (exercise) => {
        return fields.some(item => item.name === exercise.name);
    };

    return (
        <div className='container d-flex justify-content-center my-4'>
            <form className='routine-form' onSubmit={handleSubmit(onSubmitHandler)}>
                <h2><strong>Nueva rutina</strong></h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input
                        required
                        id="name"
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        {...register('name')}
                    />
                    {errors.name && <div className="invalid-feedback">Campo requerido</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción:</label>
                    <textarea
                        required
                        id="description"
                        className={`form-control ${errors.description ? "is-invalid" : ""}`}
                        {...register('description')}
                    />
                    {errors.description && <div className="invalid-feedback">Campo requerido</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="difficulty" className="form-label">Dificultad:</label>
                    <select
                        id="difficulty"
                        className={`form-select ${errors.difficulty ? "is-invalid" : ""}`}
                        {...register('difficulty')}
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Principiante">Principiante</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Experto">Experto</option>
                    </select>
                    {errors.difficulty && <div className="invalid-feedback">Campo requerido</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="routineType" className="form-label">Tipo de rutina:</label>
                    <select {...register('routineType')} className="form-select">
                        <option value="">Selecciona una opción</option>
                        <option value="Fuerza">Fuerza</option>
                        <option value="Resistencia">Resistencia</option>
                        <option value="Aeróbico">Aeróbico</option>
                        <option value="Flexibilidad">Flexibilidad</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input
                        placeholder="Buscar Ejercicios"
                        type="text"
                        id="searchExercises"
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span><strong>Seleccionar ejercicios:</strong></span>
                    <div className="exercise-search-results" style={{ maxHeight: '100px', overflowY: 'scroll' }}>
                        {filteredExercises.map((exercise, index) => (
                            <div
                                key={index}
                                className={`exercise-item ${isExerciseSelected(exercise) ? 'selected' : ''}`}
                                onClick={() => toggleExerciseSelection(exercise)}
                            >
                                <span>{exercise.name} &nbsp; {exercise.equipment}</span>
                                {isExerciseSelected(exercise) && <img
                                    src="https://res.cloudinary.com/dznumjlzc/image/upload/v1717859237/gymcode/icons/aprobado_h4nzlk.png"
                                    alt="check-icon"
                                    className="check-icon"
                                />}
                            </div>
                        ))}
                    </div>

                </div>
                <div className="mb-3">
                    <button
                        type="button"
                        className={`btn btn-outline-dark ${showNewExerciseFields ? "true" : ""}`}
                        onClick={toggleNewExerciseFields}
                    >
                        Añadir nuevo ejercicio &nbsp; | &nbsp; <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </button>

                    {showNewExerciseFields && (
                        <div>
                            <div className="mb-3">
                                <label htmlFor="newExerciseName" className="form-label">Nombre del ejercicio:</label>
                                <input
                                    required
                                    id="newExerciseName"
                                    type="text"
                                    className={`form-control ${errors?.newExerciseName ? "is-invalid" : ""}`}
                                    {...register("newExerciseName")}
                                />
                                {errors?.newExerciseName && <div className="invalid-feedback">Campo requerido</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="newExerciseEquipment" className="form-label"><strong>¿Es necesario equipamiento? Sí &nbsp; </strong></label>
                                <select
                                    id="newExerciseEquipment"
                                    className={`form-select ${errors?.newExerciseEquipment ? "is-invalid" : ""}`}
                                    {...register("newExerciseEquipment")}
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="Banda elástica">Banda elástica</option>
                                    <option value="Mancuerna">Mancuerna</option>
                                    <option value="Barra">Barra</option>
                                    <option value="Máquina">Máquina</option>
                                </select>
                                {errors?.newExerciseEquipment && <div className="invalid-feedback">Campo requerido</div>}
                            </div>

                            <button type="button" className="btn btn-outline-dark  mb-3" onClick={() => append({ name: "", equipment: "" })}>
                                Agregar ejercicio
                            </button>
                        </div>

                    )}

                </div>
                <div className="mb-3">
                    <label htmlFor="exercises" className="form-label">Ejercicios Añadidos:</label>
                    {fields.map((item) => (
                        <div key={item.id} className="added-exercise-item">
                            <span>{item.name} &nbsp; {item.equipment}</span>
                        </div>
                    ))}
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <label htmlFor="equipmentNecessary" className="form-check-label me-2 mb-0">¿Es necesario equipamiento?: Sí&nbsp;  </label>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="equipmentNecessary"
                            className="form-check-input"
                            {...register("equipmentNecessary")}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-dark ">Crear Rutina</button>
            </form>
        </div>
    );
}

export default CreateRoutineForm;
