import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../contexts/alert.context";
import AuthContext from "../../contexts/auth.context";
import './login.css';


function Login() {
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const { doLogin } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    async function onSubmit(data) {
        try {
            await doLogin(data);
            navigate("/");
        } catch (err) {
            showAlert("Credenciales inválidas")
        }
    }

    return (
        <div className="super-container-user">
            <div className="login-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            <i className="fa fa-envelope" aria-hidden="true"></i> Correo electrónico
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
                            <i className="fa fa-key" aria-hidden="true"></i>  Contraseña
                        </label>
                        <input
                            required
                            id="password"
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            {...register("password")}
                        />
                    </div>

                    <button type="submit" className="btn btn-login">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;