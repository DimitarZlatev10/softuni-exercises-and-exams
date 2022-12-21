const { isUser } = require("../middlewares/guards");
const {
  createPost,
  getPostById,
  deletePost,
  updatePost,
  makeWish,
} = require("../services/post");
const { mapErrors } = require("../utils/mappers");

const router = require("express").Router();

router.get("/create", isUser(), (req, res) => {
  res.render("create", { title: "Create Page" });
});

router.post("/create", isUser(), async (req, res) => {
  const post = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    stars: req.body.stars,
    image: req.body.image,
    review: req.body.review,
    owner: req.session.user._id,
  };
  try {
    await createPost(post);
    res.redirect("/catalog");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("create", { title: "Create Page", errors, post });
  }
});

router.get("/details/:id", async (req, res) => {
  const post = await getPostById(req.params.id);

  if (req.session.user) {
    post.hasUser = true;
    post.isOwner = post.owner._id == req.session.user._id;
    post.hasWished = post.wishingList.some((p) => p == req.session.user._id);
  }

  res.render("details", { title: `${post.title}`, post });
});

router.get("/delete/:id", isUser(), async (req, res) => {
  const post = await getPostById(req.params.id);

  if (req.session.user._id != post.author._id) {
    res.redirect("/login");
  }
  try {
    await deletePost(req.params.id);
    res.redirect("/catalog");
  } catch (err) {
    console.error(err);
  }
});

router.get("/edit/:id", isUser(), async (req, res) => {
  const post = await getPostById(req.params.id);
  if (req.session.user._id != post.owner._id) {
    res.redirect("/login");
  }
  res.render("edit", { title: `Editing: ${post.title}`, post });
});

router.post("/edit/:id", isUser(), async (req, res) => {
  const existing = await getPostById(req.params.id);
  if (req.session.user._id != existing.owner._id) {
    res.redirect("/login");
  }
  const post = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    stars: req.body.stars,
    image: req.body.image,
    review: req.body.review,
    owner: req.session.user._id,
  };
  try {
    await updatePost(req.params.id, post);
    res.redirect("/details/" + req.params.id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    post._id = req.params.id;
    res.render("edit", { title: `Editing: ${post.title}`, errors, post });
  }
});

router.get("/wish/:id", isUser(), async (req, res) => {
  try {
    await makeWish(req.params.id, req.session.user._id);
    res.redirect("/details/" + req.params.id);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
