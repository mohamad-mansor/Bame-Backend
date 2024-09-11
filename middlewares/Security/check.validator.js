import { validationResult } from "express-validator";
import createHttpError from "http-errors";

export const checkValidator = (req, res, next) => {
  const errors = validationResult(req);

  console.log(errors);

  console.log(errors.isEmpty());

  if (!errors.isEmpty()) {
    next(createHttpError.BadRequest(errors.array()));
    return;
  }
  next();
};
