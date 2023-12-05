const express = require("express");
const cors = require("cors");
const connect = require("./db/conn");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

connect();

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
