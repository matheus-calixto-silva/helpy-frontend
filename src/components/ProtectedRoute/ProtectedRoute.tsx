import { useAuth } from '../../contexts/AuthProvider/useAuth';

const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.username) {
    return <h1>You don&lsquo;t have access</h1>;
  }

  return children;
};

export default ProtectedLayout;