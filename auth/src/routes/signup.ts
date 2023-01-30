import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.get(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("e-mail sould be valide"),
    body("password")
      .trim()
      .isLength({ min: 2, max: 10 })
      .withMessage("password is not valide"),
  ],
  (req: Request, res: Response) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      res.status(400).send(error);
    }

    const { email, password } = req.body;

    res.send("Hello world!");
  }
);

export { router as signUpRoute };
