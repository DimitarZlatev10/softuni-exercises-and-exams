const { isUser } = require("../middlewares/guards");
const { getThreePosts, getAllPosts, getPostsByUser, getFollowedPostsByUser } = require("../services/post");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const posts = await getThreePosts();
  const noPosts = posts.length == 0;
  
  res.render("home", { title: "Home Page", posts, noPosts });
});

router.get("/catalog", async (req, res) => {
  const posts = await getAllPosts();

  res.render("catalog", { title: "Catalog Page", posts });
});

router.get("/profile", isUser(), async (req, res) => {
  const userPosts = await getPostsByUser(req.session.user._id)
  const followedPosts = await getFollowedPostsByUser(req.session.user._id)

  userPosts.email = req.session.user.email
  userPosts.createdBlogs = userPosts.length
  userPosts.followedBlogs = followedPosts.length;

  res.render("profile", { title: "Profile Page" , userPosts ,followedPosts});
});

module.exports = router;
