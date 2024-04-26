import axios from 'axios';

import { Admin } from '../types';

const baseUrl = 'http://localhost:3001/';

const config = {
  headers: { Authorization: '' },
};

const setToken = (newToken: string) => {
  config.headers.Authorization = `bearer ${newToken}`;
};

const getById = async (id: string) => {
  const request = await axios.get(`${baseUrl}/admins/${id}`, config);
  return request.data;
};

const update = async (id: string, newObject: Admin) => {
  const request = await axios.put(`${baseUrl}/admins/${id}`, newObject, config);
  return request.data;
};

export default {
  update,
  getById,
  setToken,
};
