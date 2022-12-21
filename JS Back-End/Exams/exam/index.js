const express = require("express");
const expressConfig = require("./config/express");
const databaseConfig = require("./config/database");
const routesConfig = require("./config/routes");
const apiRouter = require("./router");

start();

async function start() {
  const app = express();

  expressConfig(app);
  await databaseConfig(app);
  routesConfig(app);
  app.use("/api", apiRouter);

  app.listen(3000, () => console.log("Port 3000 working"));
}
