import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../services/api.service";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [error, setError] = useState();
    

    async function onSubmit(data) {
        try {
            const response = await login(data);
            setError(false)
        } catch (err) {
            setError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <div className="alert alert-danger">error. Review form data</div>
            )}

            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Correo electrónico
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
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  {...register("password")}
                />
            </div>

            <button type="submit" className="btn btn-success">
                Login
            </button>
        </form>
    );
}

export default Login;