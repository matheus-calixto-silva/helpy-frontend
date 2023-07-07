export interface Category {
  name: string;
  description: string;
  id: string;
}
export interface Skill {
  name: string;
  category: Category;
  id: string;
}
export interface Skills {
  skill: Skill;
  _id:   string;
}
export interface User {
  firstname:  string;
  lastname:   string;
  username:   string;
  email:      string;
  phone:      string;
  profilePic: string;
  skills:     Skills[];
  created_at: Date;
  updated_at: Date;
  id:         string;
}

export interface IUser {
  username?: string;
  password?: string;
  token?: string;
  role?: string;
}

export interface IContext extends IUser {
  handleLogin: (username: string, password: string) => Promise<void>;
  handleLogout: () => void
}

export interface IAuthProvider {
  children: JSX.Element;
}