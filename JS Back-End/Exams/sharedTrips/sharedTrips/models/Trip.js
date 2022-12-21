const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /^https?:\/\/(.+)/;

const tripSchema = new Schema({
  start: {
    type: String,
    minlength: [4, "Starting point should be at least 4 characters long"],
  },
  end: {
    type: String,
    minlength: [4, "Ending point must be at least 4 characters long"],
  },
  date: { type: String, required: true },
  time: { type: String, required: true },
  carImg: {
    type: String,
    validate: {
      validator(value) {
        URL_PATTERN.test(value);
      },
      message: "URL must be valid",
    },
  },
  carBrand: {
    type: String,
    minlength: [4, "Car brand must be at least 4 characters long"],
  },
  seats: { type: Number, min: 0, max: 4 },
  price: { type: Number, min: 1, max: 4 },
  description: {
    type: String,
    minlength: [10, "Description must be at least 10 characters long"],
  },
  owner: { type: ObjectId, ref: "User", required: true },
  buddies: { type: [ObjectId], ref: "User", default: [] },
});

const Trip = model("Trip", tripSchema);

module.exports = Trip;
