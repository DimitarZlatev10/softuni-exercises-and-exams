const { isUser } = require("../middlewares/guards");
const {
  createPublication,
  getPublicationById,
  sharePublication,
  deletePublication,
  updatePublication,
  addPublication,
} = require("../services/post");
const { mapErrors } = require("../utils/mappers");

const router = require("express").Router();

router.get("/create", isUser(), (req, res) => {
  res.render("create", { title: "Create Page" });
});

router.post("/create", isUser(), async (req, res) => {
  const post = {
    title: req.body.title,
    technique: req.body.technique,
    picture: req.body.picture,
    certificate: req.body.certificate.toLowerCase(),
    author: req.session.user._id,
  };

  try {
    if (
      req.body.certificate.toLowerCase() != "yes" &&
      req.body.certificate.toLowerCase() != "no"
    ) {
      throw new Error("Certificate field may contain only Yes or No!");
    }

    await createPublication(post);
    res.redirect("/catalog");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("create", { title: "Create Page", errors, post });
  }
});

router.get("/details/:id",  async (req, res) => {
  const publication = await getPublicationById(req.params.id);

  if (req.session.user) {
    publication.hasUser = true;
    publication.isOwner = req.session.user._id == publication.author._id;
    if (publication.usersShared.some((u) => u == req.session.user._id)) {
      publication.hasShared = true;
    }
  }

  res.render("details", {
    title: `Details of ${publication.title}`,
    publication,
  });
});

router.get("/share/:id", isUser(), async (req, res) => {
  try {
    await sharePublication(
      req.params.id,
      req.session.user._id,
      req.session.user
    );

    await addPublication(req.session.user._id, req.params.id);

    // res.redirect("/details/" + req.params.id);
    res.redirect('/')
  } catch (err) {
    console.error(err);
  }
});

router.get("/delete/:id", isUser(), async (req, res) => {
  const post = await getPublicationById(req.params.id);

  if (req.session.user._id != post.author._id) {
    res.redirect("/login");
  }

  try {
    await deletePublication(req.params.id);
    res.redirect("/catalog");
  } catch (err) {
    console.error(err);
  }
});

router.get("/edit/:id", isUser(), async (req, res) => {
  const post = await getPublicationById(req.params.id);
  if (req.session.user._id != post.author._id) {
    res.redirect("/login");
  }
  res.render("edit", { title: `Editing ${post.title}`, post });
});

router.post("/edit/:id", isUser(), async (req, res) => {
  const existing = await getPublicationById(req.params.id);
  if (req.session.user._id != existing.author._id) {
    res.redirect("/login");
  }

  const post = {
    title: req.body.title,
    technique: req.body.technique,
    picture: req.body.picture,
    certificate: req.body.certificate,
  };

  try {
    await updatePublication(req.params.id, post);
    res.redirect("/details/" + req.params.id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    post._id = req.params.id;
    res.render("edit", { title: `Editing ${post.title}`, errors, post });
  }
});

module.exports = router;
