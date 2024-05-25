/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
