import { createContext, useEffect, useState } from 'react';

import useNavigation from '../../libs/navigate';
import { IAuthProvider, IContext, IUser } from '../../types';

import {
  addTokenByUserType,
  getUserLocalStorage,
  loginRequest,
  removeTokenByUserType,
  removeUserLocalStorage,
  setUserLocalStorage,
} from './util';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();
  const navigate = useNavigation();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
      addTokenByUserType(user.role, user.token);
      navigate('/conta');
    }

    navigate('/home');
  }, []);

  async function handleLogin(username: string, password: string) {
    const response = await loginRequest(username, password);

    setUser(response);
    addTokenByUserType(response.role, response.token);
    setUserLocalStorage(response);
    navigate('/conta');
  }

  function handleLogout() {
    setUser(null);
    if (user?.role) removeTokenByUserType(user.role);
    removeUserLocalStorage();
    navigate('/login');
  }

  return (
    <AuthContext.Provider value={{ ...user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
