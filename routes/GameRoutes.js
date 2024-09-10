import { Router } from "express";
import {
  DeleteGameController,
  GetGameController,
  PostGameController,
  PutGameController,
} from "../controllers/GameController.js";

export const GameRouter = Router();

GameRouter.get("/", GetGameController);
GameRouter.post("/", PostGameController);
GameRouter.put("/", PutGameController);
GameRouter.delete("/", DeleteGameController);
