import React, { useContext } from "react";
import AuthContext from "../../contexts/auth.context";
import './profile.css'

function Profile() {
    const { user } = useContext(AuthContext);
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="profile-container">
            {user && (
                <>
                    <div className="profile-info">
                            <h2>Perfil de Usuario</h2>
                            <div className="badge role-color text-wrap">{user.role}</div>
                            <p>Nombre:&nbsp;{user.name}</p>
                            <p>Apellidos:&nbsp;{user.lastName}</p>
                            <p>Email:&nbsp;{user.email}</p>
                            <p>Username:&nbsp;{user.username}</p>
                            <p>Fecha de Nacimiento:&nbsp;{formatDate(user.birthDate)}</p>
                        </div>
                        <div className="profile-photo">
                            {user.photo && <img src={user.photo} />}
                    </div>

                </>
            )}
            {!user && <p>No has iniciado sesión. Por favor, inicia sesión para ver tu perfil.</p>}
        </div>
    );
}


export default Profile;
