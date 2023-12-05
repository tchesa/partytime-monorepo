import express from "express";
import cors from "cors";
import connect from "./db/conn";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

connect();

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
