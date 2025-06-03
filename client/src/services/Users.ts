import api from "./api";

export interface UserData {
  firstName: string;
  lastName: string;
  age: number;
}

export interface User extends UserData {
  id: number;
}

export async function getUser() {
  const response = await api.get('/user');
  return response.data;
};

export async function createUser(data: UserData) {
  const response = await api.post("/user", data);
  return response.data;
}