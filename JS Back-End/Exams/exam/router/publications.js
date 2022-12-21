const router = require("express").Router();
const postController = require("../services/post");


router.get("/", postController.getAllPosts);

module.exports = router;
