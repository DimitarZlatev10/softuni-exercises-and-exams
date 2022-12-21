const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /^https?:\/\/(.+)/;

const publicationSchema = new Schema({
  title: {
    type: String,
    minlength: [6, "Title must be at least 6 characters long"],
  },
  technique: {
    type: String,
    maxlength: [15, "Technique must be at most 15 characters long"],
  },
  picture: {
    type: String,
    validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: "URL must be valid",
    },
  },
  certificate: {
    type: String,
    required: true,
  },
  author: {
    type: ObjectId,
    ref: "User",
  },
  usersShared: {
    type: [ObjectId],
    ref: "User",
    default: [],
  },
});

const Publication = model("Publication", publicationSchema);

module.exports = Publication;
