import api from "./api";

export interface UserData {
  firstName: string;
  lastName: string;
  age: number;
}

export async function postUser(data: UserData) {
  const response = await api.post("/user", data);
  return response.data;
}
