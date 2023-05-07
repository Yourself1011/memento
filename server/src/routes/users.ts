import express, { Router, Request, Response, NextFunction } from "express";
import { authenticate } from "../services/auth.ts";

const authRouter: Router = express.Router();

authRouter.post("/auth", (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = req.body;

  authenticate({ username, email, password })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({
        message: error,
      });
      next(error);
    });
});

export default authRouter;
