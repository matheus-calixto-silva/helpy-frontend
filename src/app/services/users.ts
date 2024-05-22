import axios from 'axios';

import { User } from '../../types';

const baseUrl = 'http://localhost:3001';

const config = {
  headers: { Authorization: '' },
};

const setToken = (newToken: string) => {
  config.headers.Authorization = `bearer ${newToken}`;
};

const getById = async (id: string) => {
  const request = await axios.get(`${baseUrl}/users/${id}`, config);
  return request.data;
};

const getAllEvents = async () => {
  const request = await axios.get(`${baseUrl}/users/events/all`, config);
  return request.data;
};

const getAvaliableEvent = async (eventId: string) => {
  const request = await axios.get(`${baseUrl}/users/events/${eventId}`, config);
  return request.data;
};

const joinEvent = async (userId: string, eventId: string) => {
  const request = await axios.patch(
    `${baseUrl}/users/${userId}/events/${eventId}`,
    {},
    config,
  );
  return request.data;
};

const update = async (id: string, newObject: User) => {
  const request = await axios.put(`${baseUrl}/users/${id}`, newObject, config);
  return request.data;
};

export default {
  update,
  getById,
  getAllEvents,
  getAvaliableEvent,
  joinEvent,
  setToken,
};
