import { Router } from "express";
import { check } from "express-validator";
import { checkValidator } from "./../middlewares/Security/check.validator.js";

import {
  DeleteGameController,
  GetGameController,
  PostGameController,
  PutGameController,
} from "../controllers/GameController.js";

export const GameRouter = Router();

GameRouter.get(
  "/",
  check("gameid").isNumeric().withMessage("This is not a valid gameid"),
  checkValidator,
  GetGameController
);
GameRouter.post(
  "/",
  check("title").notEmpty().withMessage("Title is required."),
  check("author").notEmpty().withMessage("Author is required."),
  check("name").notEmpty().withMessage("Spielname is required."),
  check("publisher").notEmpty().withMessage("Publisher is required."),
  check("date").isISO8601().withMessage("Date must be in YYYY-MM-DD format."),
  check("age")
    .isInt({ min: 0 })
    .withMessage("Age must be a non-negative integer."),
  PostGameController
);
GameRouter.put(
  "/",
  check("title").notEmpty().withMessage("Title is required."),
  check("author").notEmpty().withMessage("Author is required."),
  check("spielname").notEmpty().withMessage("Spielname is required."),
  check("publisher").notEmpty().withMessage("Publisher is required."),
  check("date").isISO8601().withMessage("Date must be in YYYY-MM-DD format."),
  check("age")
    .isInt({ min: 0 })
    .withMessage("Age must be a non-negative integer."),
  PutGameController
);
GameRouter.delete(
  "/",
  check("gameid").isNumeric().withMessage("This is not a valid gameid"),
  checkValidator,
  DeleteGameController
);
