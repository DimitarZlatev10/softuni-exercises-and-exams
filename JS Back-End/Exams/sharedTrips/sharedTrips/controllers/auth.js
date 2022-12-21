const { isGuest, isUser } = require("../middlewares/guards");
const { register, login } = require("../services/user");
const { mapErrors } = require("../utils/mappers");

const router = require("express").Router();

router.get("/register", isGuest(), (req, res) => {
  res.render("register", { title: "Register Page" });
});

router.post("/register", isGuest(), async (req, res) => {
  try {
    if (req.body.password.trim().length < 4) {
      throw new Error("Password must be at least 4 characters long");
    } else if (req.body.password != req.body.repass) {
      throw new Error("Passwords dont match");
    }
    const user = await register(
      req.body.email,
      req.body.password,
      req.body.gender
    );

    req.session.user = user;

    res.redirect("/");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    const isMale = req.body.gender == "male";
    res.render("register", {
      title: "Register Page",
      errors,
      data: {
        email: req.body.email,
        isMale,
      },
    });
  }
});

router.get("/login", isGuest(), (req, res) => {
  res.render("login", { title: "Login Page" });
});

router.post("/login", isGuest(), async (req, res) => {
  try {
    const user = await login(req.body.email, req.body.password);
    req.session.user = user;
    res.redirect("/");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("login", { title: "Login Page", email: req.body.email, errors });
  }
});

router.get("/logout", isUser(), (req, res) => {
  delete req.session.user;
  res.redirect("/");
});

module.exports = router;
