import { useAuth } from '@app/hooks/useAuth';

const Admin = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>Admin</h1>
      <button type="button" onClick={auth.handleLogout}>
        logout
      </button>
    </div>
  );
};

export default Admin;
