const { isUser } = require("../middlewares/guards");
const {
  createPost,
  getPostById,
  deletePost,
  updatePost,
  applyForPost,
} = require("../services/post");
const { getUser } = require("../services/user");
const { mapErrors } = require("../utils/mappers");

const router = require("express").Router();

router.get("/create", isUser(), (req, res) => {
  res.render("create", { title: "Create Page" });
});

router.post("/create", isUser(), async (req, res) => {
  const post = {
    headline: req.body.headline,
    location: req.body.location,
    cName: req.body.cName,
    cDescription: req.body.cDescription,
    author: req.session.user._id,
  };
  try {
    await createPost(post);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("create", { title: "Create Page", errors, post });
  }
});

router.get("/details/:id", async (req, res) => {
  const post = await getPostById(req.params.id);
  const users = [];
  if (req.session.user) {
    post.hasUser = true;
    post.isOwner = req.session.user._id == post.author._id;
    post.hasVoted = post.usersApplied.some((a) => a == req.session.user._id);
  }
  for (const key of post.usersApplied) {
    const user = await getUser(key);
    users.push(user);
  }
  console.log(users);
  // console.log(post);
  res.render("details", { title: `Details Page`, post, users });
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
  if (req.session.user._id != post.author._id) {
    res.redirect("/login");
  }
  res.render("edit", { title: `Edit Page`, post });
});

router.post("/edit/:id", isUser(), async (req, res) => {
  const existing = await getPostById(req.params.id);
  if (req.session.user._id != existing.author._id) {
    res.redirect("/login");
  }
  const post = {
    headline: req.body.headline,
    location: req.body.location,
    cName: req.body.cName,
    cDescription: req.body.cDescription,
  };
  try {
    await updatePost(req.params.id, post);
    res.redirect("/details/" + req.params.id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    post._id = req.params.id;
    res.render("edit", { title: `Edit Page`, errors, post });
  }
});

router.get("/apply/:id", isUser(), async (req, res) => {
  try {
    await applyForPost(req.params.id, req.session.user._id);
    res.redirect("/details/" + req.params.id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("catalog", { title: "Catalog Page", errors });
  }
});


module.exports = router;
