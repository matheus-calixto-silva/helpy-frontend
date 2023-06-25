export interface UserCredentials {
  token: string;
  id: string;
  username: string;
  role: string;
}
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
