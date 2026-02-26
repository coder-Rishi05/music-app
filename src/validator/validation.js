import { body, validationResult } from "express-validator";

async function validationResult(res, req, next) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  next();
}

const validateRegistration = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3, max: 255 })
    .withMessage("enter name must be 2 to 255"),

  validationResult,
];
