import express from "express";
import { json } from "body-parser";

const app = express();

app.use(json());

app.get("/api/users/currentuser", (req, res) => {
  res.send("Hello from app ");
});

app.listen(3000, () => {
  console.log("started app on 3000 1!!");
});
