import { useAuth } from '@app/contexts/AuthProvider/useAuth';
import UserNavBar from '@views/components/UserNavBar/UserNavBar';

import AdminRoutes from './admins';
import OngRoutes from './ongs';
import VolunteerRoutes from './volunteers';

const Profile = () => {
  const { role } = useAuth();
  return (
    <section>
      <UserNavBar />
      {role === 'user' && <VolunteerRoutes />}
      {role === 'ong' && <OngRoutes />}
      {role === 'admin' && <AdminRoutes />}
    </section>
  );
};

export default Profile;
