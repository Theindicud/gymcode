import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './register.css'

import { createUser } from "../../services/api.service";
import { useAlert } from "../../contexts/alert.context";

function Register() {
    const navigate = useNavigate();
    const latitude = useRef(0);
    const longitude = useRef(0);
    const { showAlert } = useAlert();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [error, setError] = useState();
    const [photo, setPhoto] = useState(null);
    const [role, setRole] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude.current = position.coords.latitude;
            longitude.current = position.coords.longitude;
        });
    }, []);

    async function onSubmit(data) {
        try {
            setError(false);

            await createUser({
                ...data,
                photo:
                    photo ||
                    "https://asset.cloudinary.com/dznumjlzc/08ddc3023620c132c2f2927425c6b791",
                role: role,
                location: {
                    type: "Point",
                    coordinates: [latitude.current, longitude.current],
                },
            });

            navigate("/login");
        } catch (err) {
            showAlert("error. review form data");
        }
    }

    function handlePhoto(event) {
        const file = event.target.files[0];
        setPhoto(file);
    }

    function handleRoleChange(event) {
        setRole(event.target.value);
    }

    return (
        <div className="super-container-user">
        <form className="register-container" onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <div className="alert alert-danger">error. Review form data</div>
            )}

            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Nombre
                </label>
                <input
                    required
                    id="name"
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    {...register("name")}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                    Apellidos
                </label>
                <input
                    required
                    id="lastName"
                    type="text"
                    className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                    {...register("lastName")}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="photo" className="form-label">
                    Foto de perfil
                </label>
                <input
                    id="photo"
                    type="file"
                    accept="image/"
                    onChange={handlePhoto}
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    required
                    id="email"
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    {...register("email")}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Contraseña
                </label>
                <input
                    required
                    id="password"
                    type="text"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    {...register("password")}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    required
                    id="username"
                    type="text"
                    className={`form-control ${errors.username ? "is-invalid" : ""}`}
                    {...register("username")}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="birthDate" className="form-label">
                    Fecha de Nacimiento
                </label>
                <input
                    required
                    id="birthDate"
                    type="date"
                    className={`form-control ${errors.birthDate ? "is-invalid" : ""}`}
                    {...register("birthDate")}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="role" className="form-label">
                    Rol
                </label>
                <select
                    id="role"
                    className="form-select form-select"
                    value={role}
                    onChange={handleRoleChange}
                >
                    <option value="" disabled>Elegir rol</option>
                    <option value="coach">Coach</option>
                    <option value="pupil">Alumno</option>
                </select>
            </div>
            <button type="submit" className="btn btn-register">
                Registro
            </button>
        </form>
        </div>
    );
}

export default Register;