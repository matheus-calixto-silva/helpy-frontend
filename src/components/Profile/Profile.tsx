import { useAuth } from '../../contexts/AuthProvider/useAuth';

const Profile = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>User profile</h1>
      <button onClick={auth.handleLogout}>logout</button>
    </div>);
};

export default Profile;