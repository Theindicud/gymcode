import "./coach-detail.css"
function CoachDetail({ name, lastName, photo, email, username, birthDate }) {
  return (
    <>

    <div className="super-container-user">
        <div className="profile-container">
          <div className="coach-detail-info">
            <h2>Perfil del Coach</h2>
            <div className="badge role-color text-wrap">{username}</div>
            <p>Nombre:&nbsp;{name}</p>
            <p>Apellidos:&nbsp;{lastName}</p>
            <p>Email:&nbsp;{email}</p>
          </div>
          <div className="coach-detail-photo">
            <img src={photo} />
          </div>
        </div>
    </div>

    </>

  );
}

export default CoachDetail;
