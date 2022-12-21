const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const publicationSchema = new Schema({
  headline: {
    type: String,
    required: true,
    minlength: [4, "Headline must be at least 4 characters long"],
  },
  location: {
    type: String,
    required: true,
    minlength: [8, "Location must be at least 8 characters long"],
  },
  cName: {
    type: String,
    required: true,
    minlength: [3, "Company name must best at least 3 characters long"],
  },
  cDescription: {
    type: String,
    required: true,
    maxlength: [40, "Company description must be at most 40 characters long"],
  },
  author: {
    type: ObjectId,
    ref: "User",
  },
  usersApplied: [
    {
      type: ObjectId,
      ref: "User",
      default: [],
    },
  ],
});

const Publication = model("Publication", publicationSchema);

module.exports = Publication;
