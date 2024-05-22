import axios from 'axios';

import { ILoggedUSerData } from '../types';

const baseUrl = 'http://localhost:3001/login';

const login = async (credentials: ILoggedUSerData) => {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};

export default { login };
