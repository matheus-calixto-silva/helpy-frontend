import { useAuth } from '../../contexts/AuthProvider/useAuth';

import UserNavBar from '../UserNavBar/UserNavBar';

import Admin from '../Admin/Admin';
import VolunteerRoutes from '../VolunteerRoutes/VolunteerRoutes';
import OngRoutes from '../OngRoutes/OngRoutes';

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