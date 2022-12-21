import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllBooks() {
  return api.get(`/data/books?sortBy=_createdOn%20desc`);
}

export async function getById(id) {
  return api.get("/data/books/" + id);
}

export async function deleteBook(id) {
  return api.del("/data/books/" + id);
}

export async function createBook(data) {
  return api.post("/data/books", data);
}

export async function editBook(id, data) {
  return api.put("/data/books/" + id, data);
}

export async function getMyBooks(userId) {
  return api.get(
    `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
}

export async function likeBook(bookId) {
  return api.post("/data/likes", {
    bookId,
  });
}

export async function getLikesByBookId(bookId) {
  return api.get(
    `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`
  );
}

export async function getMyLikeByBookId(bookId, userId) {
  return api.get(
    `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
