const User = require("../models/User");
const { hash, compare } = require("bcrypt");
const Publication = require("../models/Post");

async function register(username, password, address) {
  const existing = await getUserByUsername(username);

  if (existing) {
    throw new Error("username is already registered");
  }

  const hashedPassword = await hash(password, 10);

  const user = new User({
    username,
    hashedPassword,
    address,
  });

  await user.save();

  return user;
}

async function login(username, password) {
  const user = await getUserByUsername(username);

  if (!user) {
    throw new Error("Incorrect username or password");
  }

  const hasMatch = await compare(password, user.hashedPassword);

  if (!hasMatch) {
    throw new Error("Incorrect username or password");
  }

  return user;
}

async function getUserByUsername(username) {
  const user = await User.findOne({
    username: new RegExp(`^${username}$`, "i"),
  });

  return user;
}

async function getUser(userId) {
  return User.findById(userId).lean();
}

module.exports = {
  register,
  login,
  getUser,
};
