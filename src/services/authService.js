import { fakeFindUser } from "./api";

export async function login(email, password) {
  return await fakeFindUser(email, password);
}
