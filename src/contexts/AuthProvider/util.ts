import loginService from '../../services/login';

import { IUser } from '../../types';

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function removeUserLocalStorage() {
  localStorage.removeItem('user');
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('user');

  if (json) {
    const user = JSON.parse(json);
    return user ?? null;
  }

  return null;
}

export async function loginRequest(username: string, password: string) {
  try {
    const response = await loginService.login({ username, password });

    return response;
  } catch (error) {
    return null;
  }
}