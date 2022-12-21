const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /^https?:\/\/(.+)/;

const publicationSchema = new Schema({
  title: {
    type: String,
    minlength: [5, "Title should be at least 5 characters"],
    maxlength: [50, "Title must be at most 50 characters"],
    required: [true, "Title is required"],
  },
  image: {
    type: String,
    validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: "URL must start with http:// or https://",
    },
    required: [true, "Image is required"],
  },
  content: {
    type: String,
    minlength: [10, "Content must be at least 10 characters long"],
    required: [true, "Content is required"],
  },
  category: {
    type: String,
    minlength: [3, "Category must be at least 3 characters long"],
    required: [true, "Category is required"],
  },
  followList: [
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
