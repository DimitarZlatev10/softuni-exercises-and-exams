const { isUser } = require("../middlewares/guards");
const { getAllPosts, getWishListByUser } = require("../services/post");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

router.get("/catalog", async (req, res) => {
  const posts = await getAllPosts();
  res.render("catalog", { title: "Catalog Page", posts });
});

router.get("/profile", isUser(), async (req, res) => {
  const posts = await getWishListByUser(req.session.user._id)
  const email = req.session.user.email
  console.log(posts);
  res.render("profile", { title: "Profile Page" , posts , email });
});

module.exports = router;
