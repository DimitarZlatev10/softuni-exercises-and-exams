const Post = require("../models/Post");

async function createPost(post) {
  const created = new Post(post);
  await created.save();
}

async function getAllPosts() {
  return Post.find({}).lean();
}

async function getPostById(id) {
  return Post.findById(id).lean()
}

async function deletePost(id) {
  return Post.findByIdAndDelete(id);
}

async function updatePost(id, post) {
  const existingPost = await Post.findById(id);

  existingPost.title = post.title;
  existingPost.author = post.author;
  existingPost.genre = post.genre;
  existingPost.stars = post.stars;
  existingPost.image = post.image;
  existingPost.review = post.review;

  await existingPost.save();
}

async function getPostsByUser(userId) {
  return Post.find({ author: userId }).lean();
}

async function makeWish(postId, userId) {
  const post = await Post.findById(postId);

  if (post.wishingList.includes(userId)) {
    throw new Error("User has already wished");
  }

  post.wishingList.push(userId);
  await post.save();
}

async function getWishListByUser(userId) {
  const wishList = []
  const posts = await Post.find({})

  for (const post of posts) {
    if(post.wishingList.includes(userId))
    wishList.push(await getPostById(post._id))
  }

  return wishList
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByUser,
  deletePost,
  updatePost,
  makeWish,
  getWishListByUser,
};
