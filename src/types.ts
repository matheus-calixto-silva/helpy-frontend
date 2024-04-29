import { ChangeEvent, FocusEvent } from 'react';

type role = 'admin' | 'user' | 'ong';

export interface ICategory {
  name: string;
  description: string;
  id: string;
}

export interface ISkill {
  name: string;
  category: ICategory;
  _id: string;
}

export interface IAddress {
  street: string;
  city: string;
  uf: string;
  latitude: string;
  longitude: string;
}

export interface IAdmin {
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

export interface IUser extends IAdmin {
  skills: ISkill[];
}

export interface IEvent {
  _id?: string;
  address: IAddress;
  name: string;
  description: string;
  date: Date;
  requiredSkills: ISkill[];
  maxVolunteers: number;
  volunteers: IUser[];
  eventPic: string;
  created_at: Date;
  updated_at: Date;
}

export interface IOng extends IAdmin {
  address: string;
  cnpj: string;
  maxEvents: number;
  events: IEvent[];
}

export interface ILoggedUSerData {
  username?: string;
  password?: string;
  token?: string;
  role?: string;
  id?: string;
}

export interface IContext extends ILoggedUSerData {
  handleLogin: (username: string, password: string) => Promise<void>;
  handleLogout: () => void;
}

export interface IAuthProvider {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
}

export interface IInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void; // Make onBlur optional
  error?: string;
}

export interface IRegiao {
  id: number;
  sigla: string;
  nome: string;
}

export interface IUf {
  id: number;
  sigla: string;
  nome: string;
  regiao?: IRegiao;
}

export interface IMesorregiao {
  id: number;
  nome: string;
  UF: IUf;
}
export interface IMicrorregiao {
  id: number;
  nome: string;
  mesorregiao: IMesorregiao;
}
export interface ICity {
  id: number;
  nome: string;
  microrregiao: IMicrorregiao;
}

export interface IDatePickerComponentProps {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
}
