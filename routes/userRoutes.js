import { Router } from "express";
import { body, param } from 'express-validator';
import {
  DeleteUserController,
  GetUserController,
  PostUserController,
  PutUserController,
} from "../controllers/UserController.js";

export const UserRouter = Router();

UserRouter.get("/", GetUserController);
UserRouter.post("/", PostUserController);
UserRouter.put("/", PutUserController);
UserRouter.delete("/", DeleteUserController);

UserRouter.put('/:userid', [
  param('userid').isInt().withMessage('User ID'),
  body('email').isEmail().withMessage('Email'),
  body('password').isLength({ min: 8 }).withMessage('Password'),
  body('username').isLength({ min: 3 }).withMessage('Username '),
  body('tos').isBoolean().withMessage('')
], PutUserController);

UserRouter.get("/:userid", 
  param('userid').isInt().withMessage('User ID'), 
  GetUserController
)
// 
UserRouter.delete('/:userid', 
  param('userid').isInt().withMessage('User ID'),
  DeleteUserController
);

export default UserRouter;