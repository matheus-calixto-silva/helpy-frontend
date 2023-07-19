import { useAuth } from '../../contexts/AuthProvider/useAuth';

import Admin from '../Admin/Admin';
import Ong from '../Ong/Ong';
import Volunteer from '../Volunteer/Volunteer';

const Profile = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>Profile</h1>
      {auth.role === 'user' && <Volunteer />}
      {auth.role === 'ong' && <Ong />}
      {auth.role === 'admin' && <Admin />}
    </div>);
};

export default Profile;