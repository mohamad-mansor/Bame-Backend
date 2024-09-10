import { Router } from "express";
import {
  DeleteUserController,
  GetUserController,
  PostUserController,
  PutUserController,
} from "../controllers/userController.js";

export const UserRouter = Router();

UserRouter.get("/", GetUserController);
UserRouter.post("/", PostUserController);
UserRouter.put("/", PutUserController);
UserRouter.delete("/", DeleteUserController);
