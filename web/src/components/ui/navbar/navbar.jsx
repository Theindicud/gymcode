import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/auth.context";

import "./navbar.css";

const renderNavLinkActive = ({ isActive }) =>
  isActive ? "nav-link active" : "nav-link";

function Navbar() {
  const { user, doLogout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-logo" to="/" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menú
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className=" offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <i className=" fa fa-home" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                {user ? (
                  <a className="nav-link" href="/profile" style={{fontWeight: 'bold'}}>
                    Perfil - {user.name}
                  </a>
                ) : (
                  <a className="nav-link" href="/login" style={{fontWeight: 'bold'}}>
                    Iniciar sesión
                  </a>
                )}
              </li>

              <li className="nav-item">
                {user ? null : (
                  <a className="nav-link" href="/Register" style={{fontWeight: 'bold'}}>
                    Registrate
                  </a>
                )}
              </li>

              <li className="nav-item">
                {user ? (
                  <a className="nav-link" href="/myroutines" style={{fontWeight: 'bold'}}>
                    Mis rutinas
                  </a>
                ) : null}
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/routines" style={{fontWeight: 'bold'}}>
                  Rutinas
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/coaches" style={{fontWeight: 'bold'}}>
                  Coach
                </a>
              </li>

              {user && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{fontWeight: 'bold'}}
                  >
                    Configuración <i class="fa fa-cog" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/profile" style={{fontWeight: 'bold'}}>
                        Perfil
                      </a>
                    </li>
                    <li className="nav-item">
                      <a onClick={doLogout} className="dropdown-item btn btn-sm" style={{fontWeight: 'bold', color: 'red'}}>
                        Cerrar sesión
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
