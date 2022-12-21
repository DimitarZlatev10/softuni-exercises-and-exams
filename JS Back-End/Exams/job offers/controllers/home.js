const { isUser } = require("../middlewares/guards");
const { getFirst3Posts, getAllPosts, search } = require("../services/post");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const posts = await getFirst3Posts();

  res.render("home", { title: "Home Page", posts });
});

router.get("/catalog", async (req, res) => {
  const posts = await getAllPosts();

  res.render("catalog", { title: "Catalog Page", posts });
});

router.get("/search", isUser(), async (req, res) => {
  res.render("search", { title: "Search" });
});

router.post("/search", isUser(), async (req, res) => {
  const result = await search(req.body.str.trim());
  res.render('search' , {title : 'Search Page' , result})
});

module.exports = router;
