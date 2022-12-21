const { isUser } = require("../middlewares/guards");
const {
  getAllPublications,
  getPostsByUser,
} = require("../services/post");
const { getUser } = require("../services/user");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const publications = await getAllPublications();
  res.render("home", { title: "Home Page", publications });
});

router.get("/catalog", async (req, res) => {
  const publications = await getAllPublications();
  res.render("catalog", { title: "Catalog Page", publications });
});

router.get("/profile", isUser(), async (req, res) => {
  const posts = await getPostsByUser(req.session.user._id);
  const user = await getUser(req.session.user._id);
  posts.titlesOfAuthor = posts.map((t) => t.title).join(", ");
  user.sharedPublications = user.myPublications.map((p) => p).join(", ");

  console.log(user.sharedPublications);
  res.render("profile", { title: "Profile Page", posts, user });
});

module.exports = router;
