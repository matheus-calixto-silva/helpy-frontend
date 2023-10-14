import { useAuth } from '../../contexts/AuthProvider/useAuth';

import UserNavBar from '../UserNavBar/UserNavBar';

import Admin from '../Admin/Admin';
import Volunteer from '../Volunteer/Volunteer';
import OngRoutes from '../OngRoutes/OngRoutes';

const Profile = () => {
  const auth = useAuth();
  return (
    <section>
      <UserNavBar />
      {auth.role === 'user' && <Volunteer />}
      {auth.role === 'ong' && <OngRoutes />}
      {auth.role === 'admin' && <Admin />}
    </section>
  );
};

export default Profile;