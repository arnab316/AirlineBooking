const { ServerConfig, Logger } = require("./config");

const express = require("express");
const apiRouter = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(ServerConfig.PORT, () => {
  console.log(`app listening on port ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server ", "root");
});
