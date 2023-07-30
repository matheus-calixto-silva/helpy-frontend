import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const config = {
  headers: { Authorization: '' },
};

export const getAllSkills = async (token: string) => {
  config.headers.Authorization = `bearer ${token}`;
  const request = await axios.get(`${baseUrl}/skills`, config);
  return request.data;
};

export default {
  getAllSkills
};
