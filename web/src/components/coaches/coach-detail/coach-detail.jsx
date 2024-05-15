
function CoachDetail({ name, lastName, photo, email, username, birthDate }) {
  return (
    <div className="coach-detail">
      <div className="coach-detail-header">
        <h2>{`${name} ${lastName}`}</h2>
        <img src={photo} alt={`${name} ${lastName}`} />
      </div>
      <div className="coach-detail-info">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Birth Date:</strong> {new Date(birthDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default CoachDetail;
