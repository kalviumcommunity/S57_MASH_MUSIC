import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import main from "./model/seed.js";
import { as } from "./congig/congig.js";
dotenv.config();
const app = express();
as();
main();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
