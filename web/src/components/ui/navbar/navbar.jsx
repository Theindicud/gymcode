import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"; // Importa NavLink
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
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/"
                >
                  <i className=" fa fa-home" aria-hidden="true"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                {user ? (
                  <NavLink
                    className={renderNavLinkActive}
                    activeclassname="active"
                    to="/profile"
                    style={{ fontWeight: "bold" }}
                  >
                    Perfil - {user.name}
                  </NavLink>
                ) : (
                  <NavLink
                    className={renderNavLinkActive}
                    activeclassname="active"
                    to="/login"
                    style={{ fontWeight: "bold" }}
                  >
                    Iniciar sesión
                  </NavLink>
                )}
              </li>

              <li className="nav-item">
                {user ? null : (
                  <NavLink
                    className={renderNavLinkActive}
                    activeclassname="active"
                    to="/register"
                    style={{ fontWeight: "bold" }}
                  >
                    Registrate
                  </NavLink>
                )}
              </li>

              <li className="nav-item">
                {user ? (
                  <NavLink
                    className={renderNavLinkActive}
                    activeclassname="active"
                    to="/myroutines"
                    style={{ fontWeight: "bold" }}
                  >
                    Mis rutinas
                  </NavLink>
                ) : null}
              </li>

              <li className="nav-item">
                <NavLink
                  className={renderNavLinkActive}
                  activeclassname="active"
                  to="/routines"
                  style={{ fontWeight: "bold" }}
                >
                  Rutinas
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={renderNavLinkActive}
                  activeclassname="active"
                  to="/coaches"
                  style={{ fontWeight: "bold" }}
                >
                  Coach
                </NavLink>
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
                    style={{ fontWeight: "bold" }}
                  >
                    Configuración{" "}
                    <i className="fa fa-cog" aria-hidden="true"></i>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/profile"
                        style={{ fontWeight: "bold" }}
                      >
                        Perfil
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a
                        onClick={doLogout}
                        className="dropdown-item btn btn-sm"
                        style={{ fontWeight: "bold", color: "red" }}
                      >
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

