import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getExercise, createRoutine } from '../../services/api.service';
import { useAlert } from '../../contexts/alert.context';

function CreateRoutineForm() {
    console.log('CreateRoutineForm se ha montado'); // Log de depuración

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();
    const { showAlert } = useAlert();

    useEffect(() => {
        async function fetchExercises() {
            try {
                const response = await getExercise();
                setExercises(response.data)
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        }

        fetchExercises();
    }, []);

    const onSubmitHandler = async (formData) => {
        try {
            await createRoutine(formData);
            navigate("/myroutines");
            showAlert("Rutina creada exitosamente");
        } catch (error) {
            showAlert(`Error al crear la rutina: ${error.message}`);
        }
    };

    return (
        <form className='routine-form' onSubmit={handleSubmit(onSubmitHandler)}>
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
            <label>
                Tipo de rutina:
                <select {...register('routineType')} className="form-select">
                    <option value="">Selecciona una opción</option>
                    <option value="Fuerza">Fuerza</option>
                    <option value="Resistencia">Resistencia</option>
                    <option value="Aeróbico">Aeróbico</option>
                    <option value="Flexibilidad">Flexibilidad</option>
                    <option value="Otro">Otro</option>
                </select>
            </label>
            <label>
                Ejercicios:
                {exercises.map((exercise, index) => (
                    <div key={index}>
                        <div className="mb-3">
                            <label htmlFor={`exercises[${index}].name`} className="form-label">Nombre del ejercicio:</label>
                            <input
                                required
                                id={`exercises[${index}].name`}
                                type="text"
                                className={`form-control ${errors?.exercises?.[index]?.name ? "is-invalid" : ""}`}
                                {...register(`exercises[${index}].name`)}
                            />
                            {errors?.exercises?.[index]?.name && <div className="invalid-feedback">Campo requerido</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor={`exercises[${index}].equipment`} className="form-label">Equipamiento:</label>
                            <select
                                id={`exercises[${index}].equipment`}
                                className={`form-select ${errors?.exercises?.[index]?.equipment ? "is-invalid" : ""}`}
                                {...register(`exercises[${index}].equipment`)}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="Banda elástica">Banda elástica</option>
                                <option value="Mancuerna">Mancuerna</option>
                                <option value="Barra">Barra</option>
                                <option value="Máquina">Máquina</option>
                            </select>
                            {errors?.exercises?.[index]?.equipment && <div className="invalid-feedback">Campo requerido</div>}
                        </div>
                    </div>
                ))}

                <div className="mb-3">
                    <label htmlFor="newExerciseName" className="form-label">Nombre del nuevo ejercicio:</label>
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
                    <label htmlFor="newExerciseEquipment" className="form-label">Equipamiento del nuevo ejercicio:</label>
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
            </label>

            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    id="equipmentNecessary"
                    className="form-check-input"
                    {...register("equipmentNecessary")}
                />
                <label htmlFor="equipmentNecessary" className="form-check-label">¿Es necesario equipamiento?</label>
            </div>

            <button type="submit" className="btn btn-primary">Crear Rutina</button>
        </form>
    );
}

export default CreateRoutineForm;
