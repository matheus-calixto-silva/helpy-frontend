/* eslint-disable no-console */
import adminService from '../../services/admins';
import loginService from '../../services/login';
import ongService from '../../services/ongs';
import userService from '../../services/users';
import { ILoggedUSerData } from '../../types';

export function addTokenByUserType(role: string, token: string) {
  switch (role) {
    case 'user':
      userService.setToken(token);
      break;
    case 'admin':
      adminService.setToken(token);
      break;
    case 'ong':
      ongService.setToken(token);
      break;
    default:
      console.log('Tipo de usuário desconhecido.');
  }
}

export function removeTokenByUserType(role: string) {
  switch (role) {
    case 'user':
      userService.setToken('');
      break;
    case 'admin':
      adminService.setToken('');
      break;
    case 'ong':
      ongService.setToken('');
      break;
    default:
      console.log('Tipo de usuário desconhecido.');
  }
}

export function setUserLocalStorage(user: ILoggedUSerData | null) {
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
