import { Router } from "express";
import { PostSignupController } from "../controllers/PostController.js";

export const SignupRouter = Router();
SignupRouter.post("/", PostSignupController);

// Controller auslager, keine Validierung, Bitte nur dummy respone zurückgeben, json
