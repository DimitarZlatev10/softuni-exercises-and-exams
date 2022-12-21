import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllItems() {
  return api.get("/data/pets?sortBy=_createdOn%20desc&distinct=name");
}

export async function createItem(data) {
  return api.post("/data/pets", data);
}

export async function getById(id) {
  return api.get("/data/pets/" + id);
}

export async function deleteById(id) {
  return api.del("/data/pets/" + id);
}

export async function editItem(id, data) {
  return api.put("/data/pets/" + id, data);
}

export async function donate(petId) {
  return api.post("/data/donation", {
    petId,
  });
}

export async function totalDonations(petId) {
  return api.get(
    `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`
  );
}

export async function getDonationByUser(petId, userId) {
  return api.get(
    `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
