import api from "./api";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

export async function getUsers() {
  const response = await api.get('/user');
  return response.data;
}

export async function createUser(data: Omit<User, 'id'>) {
  const response = await api.post('/user', data);
  return response.data;
}