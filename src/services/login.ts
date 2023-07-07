import axios from 'axios';
import { IUser } from '../types';

const baseUrl = 'http://localhost:3001/login';

const login = async (credentials: IUser) => {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};

export default { login };
