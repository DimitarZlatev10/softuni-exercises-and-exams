const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /^https?:\/\/(.+)/;

const publicationSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [2, "title must be at least 2 characters long"],
  },
  author: {
    type: String,
    required: true,
    minglength: [5, "author must be at least 5 characters long"],
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: "URL must be a valid one",
    },
  },
  review: {
    type: String,
    required: true,
    minlength: [10, "review must be at least 10 characters long"],
  },
  genre: {
    type: String,
    required: true,
    minlength: [3, "genre must be at least 3 characters long"],
  },
  stars: {
    type: Number,
    required: true,
    min: [1, "minimum stars is 1"],
    max: [5, "maximum stars are 5"],
  },
  wishingList: [
    {
      type: ObjectId,
      ref: "User",
      default: [],
    },
  ],
  owner: {
    type: ObjectId,
    ref: "User",
  },
});

const Publication = model("Publication", publicationSchema);

module.exports = Publication;
