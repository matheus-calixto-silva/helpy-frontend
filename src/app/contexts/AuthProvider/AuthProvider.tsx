import { createContext, useEffect, useMemo, useState } from 'react';

import { IAuthProvider, IContext, IUser } from '../../../types';
import useNavigation from '../../libs/navigate';

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
    const userLocalStorage = getUserLocalStorage();

    if (userLocalStorage) {
      setUser(userLocalStorage);
      addTokenByUserType(userLocalStorage.role, userLocalStorage.token);
      navigate('/conta');
    }

    navigate('/home');
  }, [navigate]);

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

  const contextValue = useMemo(
    () => ({
      ...user,
      handleLogin,
      handleLogout,
    }),
    [user],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
