import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { createUser } from "../services/api.service";


function Register() {
    const navigate = useNavigate();
    const latitude = useRef(0);
    const longitude = useRef(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [error, setError] = useState();
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude.current = position.coords.latitude;
            longitude.current = position.coords.longitude;
        });
    }, []);

    async function onSubmit(data) {
        try {
            setError(false)

            await createUser({
                ...data,
                photo: photo || 'https://asset.cloudinary.com/dznumjlzc/08ddc3023620c132c2f2927425c6b791',
                location: {
                    type: "Point",
                    coordinates: [latitude.current, longitude.current]
                },
            });

            navigate("/login");
        } catch (err) {
            setError(true);
        }
    }

    function handlePhoto(event) {
        const file = event.target.files[0];
        setPhoto(file);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            
            <button type="submit" className="btn btn-success">
                Registro
            </button>
        </form>
    );
}

export default Register;