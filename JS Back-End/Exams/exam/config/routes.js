const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postController = require("../controllers/post");

module.exports = (app) => {
  app.use(authController);
  app.use(homeController);
  app.use(postController);

  app.get("*", (req, res) => {
    res.render("404", { title: "404 Page" });
  });
};
