const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [4, "Username must be at least 4 characters long"],
  },
  email: {
    type: String,
    required: true,
    minlength: [10, "Email must be at least 10 characters long"],
  },
  hashedPassword: {
    type: String,
    required: true,
  },
});

userSchema.index(
  { email: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
