import { createContext, useEffect, useState } from 'react';

import { IAuthProvider, IContext, IUser } from '../../types';

import {
  addTokenByUserType,
  getUserLocalStorage,
  loginRequest,
  removeTokenByUserType,
  removeUserLocalStorage,
  setUserLocalStorage,
} from './util';

import { navigate } from '../../libs/navigate';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

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
