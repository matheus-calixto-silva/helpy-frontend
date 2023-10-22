import { ChangeEvent, FocusEvent } from 'react';
export interface Admin {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  password?: string;
  passwordHash?: string;
  email: string;
  phone: string;
  profilePic: string;
  created_at: number;
  updated_at: number;
  role: role;
}

export interface Ong extends Admin {
  address: string;
  cnpj: string;
  maxEvents: number;
  events: Event[]
}

export interface User extends Admin {
  skills: Skill[];
}
export interface Event {
  _id?: string;
  address: Address;
  name: string;
  description: string;
  date: Date;
  requiredSkills: Skill[];
  maxVolunteers: number;
  volunteers: User[];
  eventPic: string;
  created_at: Date;
  updated_at: Date;
}

type role = 'admin' | 'user' | 'ong';

export interface Category {
  name: string;
  description: string;
  id: string;
}
export interface Skill {
  name: string;
  category: Category;
  _id: string;
}
export interface IUser {
  username?: string;
  password?: string;
  token?: string;
  role?: string;
  id?: string;
}
export interface IContext extends IUser {
  handleLogin: (username: string, password: string) => Promise<void>;
  handleLogout: () => void
}
export interface IAuthProvider {
  children: JSX.Element;
}

export interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void; // Make onBlur optional
  error?: string;
}

export interface Address {
  street: string;
  city: string;
  uf: string;
  latitude: string;
  longitude: string;
}

export interface City {
  id: number;
  nome: string;
  microrregiao: Microrregiao;
}

export interface Microrregiao {
  id: number;
  nome: string;
  mesorregiao: Mesorregiao;
}

export interface Mesorregiao {
  id: number;
  nome: string;
  UF: Uf;
}

export interface Uf {
  id: number;
  sigla: string;
  nome: string;
  regiao?: Regiao;
}

export interface Regiao {
  id: number;
  sigla: string;
  nome: string;
}

export interface DatePickerComponentProps {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
}