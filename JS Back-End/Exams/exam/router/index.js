const router = require("express").Router();
const posts = require("./publications");

router.use("/posts", posts);

module.exports = router;
