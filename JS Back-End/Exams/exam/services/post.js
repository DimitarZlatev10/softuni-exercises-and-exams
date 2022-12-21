const Post = require("../models/Post");

async function createPost(post) {
  const created = new Post(post);
  await created.save();
}

async function getThreePosts() {
  return Post.find({}).limit(3).lean();
}

async function getAllPosts() {
  return Post.find({}).lean();
}

async function getPostById(id) {
  return Post.findById(id)
    .lean()
    .populate("owner", "email")
    .populate("followList", "email");
}

async function deletePost(id) {
  return Post.findByIdAndDelete(id);
}

async function updatePost(id, post) {
  const existingPost = await Post.findById(id);

  existingPost.title = post.title;
  existingPost.image = post.image;
  existingPost.content = post.content;
  existingPost.category = post.category;

  await existingPost.save();
}

async function getPostsByUser(userId) {
  return Post.find({ owner: userId }).lean();
}

async function follow(postId, userId) {
  const post = await Post.findById(postId);

  if (post.followList.includes(userId)) {
    throw new Error("User has already followed");
  }

  post.followList.push(userId);

  await post.save();
}

async function getFollowedPostsByUser(userId) {
  const followed = [];
  const posts = await Post.find({});

  for (const post of posts) {
    if (post.followList.includes(userId)) {
      followed.push(await getPostById(post._id));
    }
  }

  return followed;
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByUser,
  deletePost,
  updatePost,
  getThreePosts,
  follow,
  getFollowedPostsByUser,
};
