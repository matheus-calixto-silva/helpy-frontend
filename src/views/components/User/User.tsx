import { useAuth } from '../../app/contexts/AuthProvider/useAuth';
import Admin from '../Admin/Admin';
import OngRoutes from '../OngRoutes/OngRoutes';
import UserNavBar from '../UserNavBar/UserNavBar';
import VolunteerRoutes from '../VolunteerRoutes/VolunteerRoutes';

const Profile = () => {
  const auth = useAuth();
  return (
    <section>
      <UserNavBar />
      {auth.role === 'user' && <VolunteerRoutes />}
      {auth.role === 'ong' && <OngRoutes />}
      {auth.role === 'admin' && <Admin />}
    </section>
  );
};

export default Profile;
