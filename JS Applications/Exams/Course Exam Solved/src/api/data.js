import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll() {
  return api.get("/data/offers?sortBy=_createdOn%20desc");
}

export async function createItem(data) {
  return api.post("/data/offers", data);
}

export async function getById(id) {
  return api.get("/data/offers/" + id);
}

export async function deleteById(id) {
  return api.del("/data/offers/" + id);
}

export async function editItem(id, data) {
  return api.put("/data/offers/" + id, data);
}

export async function postApply(offerId) {
  return api.post("/data/applications", {
    offerId,
  });
}

export async function applyCount(offerId) {
  return api.get(
    `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`
  );
}

export async function ifUserApplied(offerId, userId) {
  return api.get(
    `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
