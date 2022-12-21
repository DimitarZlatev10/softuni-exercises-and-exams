const Publication = require("../models/Post");
const User = require("../models/User");

async function createPublication(publication) {
  const created = new Publication(publication);
  await created.save();
}

async function getAllPublications() {
  return Publication.find({}).lean();
}

async function getPublicationById(id) {
  return Publication.findById(id).populate("author", "username").lean();
}

async function sharePublication(postId, userId, user) {
  const existing = await Publication.findById(postId);

  if (existing.usersShared.includes(userId)) {
    throw new Error("User already shared");
  }

  existing.usersShared.push(userId);
  await existing.save();
}

async function deletePublication(id) {
  return Publication.findByIdAndDelete(id);
}

async function updatePublication(id, post) {
  const existing = await Publication.findById(id);

  existing.title = post.title;
  existing.technique = post.technique;
  existing.picture = post.picture;
  existing.certificate = post.certificate;

  await existing.save();
}

async function addPublication(userId, postId) {
  const user = await User.findById(userId);
  const post = await Publication.findById(postId);

  user.myPublications.push(post.title);
  await user.save();
}

async function getPostsByUser(userId) {
  return Publication.find({ author: userId }).lean();
}

module.exports = {
  createPublication,
  getAllPublications,
  getPublicationById,
  sharePublication,
  deletePublication,
  updatePublication,
  addPublication,
  getPostsByUser,
};
