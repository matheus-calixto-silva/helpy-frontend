import axios from 'axios';

import { IOng } from '../../types';

const baseUrl = 'http://localhost:3001';

const config = {
  headers: { Authorization: '' },
};

const setToken = (newToken: string) => {
  config.headers.Authorization = `bearer ${newToken}`;
};

const getById = async (id: string) => {
  const request = await axios.get(`${baseUrl}/ongs/${id}`, config);
  return request.data;
};

const getEventsByOng = async (id: string) => {
  const request = await axios.get(`${baseUrl}/ongs/${id}/events`, config);
  return request.data;
};

const getEventById = async (ongId: string, eventId: string) => {
  const request = await axios.get(
    `${baseUrl}/ongs/${ongId}/events/${eventId}`,
    config,
  );
  return request.data;
};

const updateOngEvent = async (
  idOng: string,
  idEvent: string,
  newObject: FormData,
  action: 'update' | 'delete',
) => {
  const request = await axios.patch(
    `${baseUrl}/ongs/${idOng}/events/${idEvent}/${action}`,
    newObject,
    config,
  );
  return request.data;
};

const createOngEvent = async (id: string, Obj: FormData) => {
  const request = await axios.patch(
    `${baseUrl}/ongs/${id}/events`,
    Obj,
    config,
  );
  return request.data;
};

const update = async (id: string, newObject: IOng) => {
  const request = await axios.put(`${baseUrl}/ongs/${id}`, newObject, config);
  return request.data;
};

const removeOngEvent = async (
  idOng: string,
  idEvent: string,
  action: 'update' | 'delete',
) => {
  const request = await axios.patch(
    `${baseUrl}/ongs/${idOng}/events/${idEvent}/${action}`,
    {},
    config,
  );
  return request.data;
};

export default {
  update,
  getById,
  getEventsByOng,
  getEventById,
  createOngEvent,
  setToken,
  updateOngEvent,
  removeOngEvent,
};
