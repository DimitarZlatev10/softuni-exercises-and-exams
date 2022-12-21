const mongoose = require("mongoose");

require("../models/User");

const connectionString = "mongodb://localhost:27017/jobOffers";

module.exports = async (app) => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected");

    mongoose.connection.on("error", (err) => {
      console.error("Database error");
      console.error(err);
    });
  } catch (err) {
    console.error("error connection to database");
    process.exit(1);
  }
};
