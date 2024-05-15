import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCoachById } from '../../services/api.service';
import CoachDetail from '../../components/coaches/coach-detail/coach-detail'; 

function CoachSingle() {
  const { id } = useParams();
  const [coach, setCoach] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCoach() {
      try {
        const response = await getCoachById(id);
        setCoach(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching coach:', error);
        setLoading(false);
      }
    }
    fetchCoach();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CoachDetail
          name={coach.name}
          lastName={coach.lastName}
          photo={coach.photo}
          email={coach.email}
          username={coach.username}
          birthDate={coach.birthDate}
        />
      )}
    </div>
  );
}

export default CoachSingle;
