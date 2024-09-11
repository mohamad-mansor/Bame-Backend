import { Router } from "express";
import { check } from "express-validator";
import {
  DeleteUserController,
  GetUserController,
  PutUserController,
} from "../controllers/UserController.js";
import { checkValidator } from "../middlewares/Security/check.validator.js";

export const UserRouter = Router();

UserRouter.get(
  "/",
  check("userid")
    .notEmpty()
    .withMessage("userid is required")
    .isNumeric()
    .withMessage("Not a correct Format")
    .trim(),
  checkValidator,
  GetUserController
);

UserRouter.put(
  "/",
  check("userid")
    .notEmpty()
    .withMessage("userid is required")
    .isNumeric()
    .withMessage("Not a correct Format")
    .trim(),
  check("email").isEmail().withMessage("This is not a valid email"),
  check("password")
    .matches(/^(?=.*[A-ZÄÖÜ])(?=.*\d)(?=.*[\W_])[^\s]{8,}$/)
    .withMessage("No valid Password")
    .trim(),
  check("username")
    .matches(/^[a-zA-ZäöüÄÖÜ0-9_-]{3,20}$/)
    .withMessage("Username is not valid")
    .trim(),
  check("tos")
    .isInt({ min: 0, max: 1 })
    .withMessage("Not a valid state")
    .trim(),
  checkValidator,
  PutUserController
);

UserRouter.delete(
  "/",
  check("userid")
    .notEmpty()
    .withMessage("userid is required")
    .isNumeric()
    .withMessage("Not a correct Format")
    .trim(),
  checkValidator,
  DeleteUserController
);
