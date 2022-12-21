const Post = require("../models/Post");

async function createPost(post) {
  const created = new Post(post);
  await created.save();
}

async function getFirst3Posts() {
  return Post.find().limit(3).lean();
}

async function getAllPosts() {
  return Post.find().lean();
}

async function getPostById(id) {
  return Post.findById(id).lean().populate("author", "email"); //and populate
}

async function deletePost(id) {
  return Post.findByIdAndDelete(id);
}

async function updatePost(id, post) {
  const existingPost = await Post.findById(id);

  existingPost.headline = post.headline;
  existingPost.location = post.location;
  existingPost.cName = post.cName;
  existingPost.cDescription = post.cDescription;

  await existingPost.save();
}

async function getPostsByUser(userId) {
  return Post.find({ author: userId }).lean();
}

async function applyForPost(postId, userId) {
  const post = await Post.findById(postId);

  if (post.usersApplied.find((a) => a == userId)) {
    throw new Error("User has already applied");
  }

  post.usersApplied.push(userId);
  await post.save();
}

async function search(typeStr) {
  const regEx = new RegExp(typeStr, "i");
  const ads = await Post.find().lean().populate("author");
  return ads.filter((x) => regEx.test(x.author.email));
}

module.exports = {
  createPost,
  getFirst3Posts,
  getPostById,
  getPostsByUser,
  deletePost,
  updatePost,
  getAllPosts,
  applyForPost,
  search,
};
