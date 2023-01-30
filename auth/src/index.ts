import express from "express";
import { json } from "body-parser";
import { currentUserRoute } from "./routes/current-user";
import { signInRoute } from "./routes/signin";
import { signOutRoute } from "./routes/signout";
import { signUpRoute } from "./routes/signup";

const app = express();

app.use(json());

app.use(currentUserRoute);

app.use(signInRoute);

app.use(signOutRoute);

app.use(signUpRoute);

app.listen(3000, () => {
  console.log("started app on 3000 1!!");
});
