import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll() {
  return api.get("/data/posts?sortBy=_createdOn%20desc");
}

export async function createItem(data) {
  return api.post("/data/posts", data);
}

export async function getById(id) {
  return api.get("/data/posts/" + id);
}

export async function editItem(id, data) {
  return api.put("/data/posts/" + id, data);
}

export async function deleteItem(id) {
  return api.del("/data/posts/" + id);
}

export async function getMyItems(userId) {
  return api.get(
    `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
}

export async function donate(id) {
  return api.post("/data/donations", {
    id,
  });
}

export async function donateCount(postId) {
  return api.get(
    `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`
  );
}

export async function getDonationByUser(postId, userId) {
  return api.get(
    `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
