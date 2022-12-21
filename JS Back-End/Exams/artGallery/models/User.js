const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    minlength: [4, "First name must be at least 4 characters long"],
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    minlength: [1, "Address is required"],
    maxlength: [20, "Address must be at most 20 characters long"],
    required: true,
  },
  myPublications: {
    type: Array,
    ref: "Publication",
    default: [],
  },
});

userSchema.index(
  { username: 1 },
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
