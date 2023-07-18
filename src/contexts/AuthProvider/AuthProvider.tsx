import { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from '../../types';
import { getUserLocalStorage, loginRequest, removeUserLocalStorage, setUserLocalStorage } from './util';

import useNavigation from '../../navigate';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();
  const navigate = useNavigation();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }

  }, []);

  async function handleLogin(username: string, password: string) {
    const response = await loginRequest(username, password);

    setUser(response);
    setUserLocalStorage(response);
    navigate('/profile');
  }

  function handleLogout() {
    setUser(null);
    removeUserLocalStorage();
    navigate('/');
  }

  return (
    <AuthContext.Provider value={{ ...user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
