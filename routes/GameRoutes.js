import { Router } from "express";
import { check, validationResult } from "express-validator";
import {
  DeleteGameController,
  GetGameController,
  PostGameController,
  PutGameController,
} from "../controllers/GameController.js";

export const GameRouter = Router();

const validateGameId = [
  check('gameid')
    .isInt({ min: 1 })
    .withMessage('Game ID must be a positive integer.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateGameFields = [
  check('title').notEmpty().withMessage('Title is required.'),
  check('author').notEmpty().withMessage('Author is required.'),
  check('spielname').notEmpty().withMessage('Spielname is required.'),
  check('publisher').notEmpty().withMessage('Publisher is required.'),
  check('date')
    .isISO8601()
    .withMessage('Date must be in YYYY-MM-DD format.'),
  check('age')
    .isInt({ min: 0 })
    .withMessage('Age must be a non-negative integer.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

GameRouter.get("/", validateGameId, GetGameController);
GameRouter.post("/", validateGameFields, PostGameController);
GameRouter.put("/", validateGameFields, PutGameController);
GameRouter.delete("/", validateGameId, DeleteGameController);
