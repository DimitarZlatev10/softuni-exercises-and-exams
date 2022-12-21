const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    minlength: [2, "Username must be at least 2 characters long"],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    minlength: [10, "Email must be at least 10 characters long"],
    required: [true, "Email is required"],
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
