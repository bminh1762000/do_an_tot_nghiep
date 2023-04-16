const express = require("express");
const { body } = require("express-validator");

const User = require("../models/user");
const authController = require("../controllers/auth");

const router = express.Router();

router.put(
  "/signup",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject("Email address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }).isAlphanumeric(),
  ],
  authController.signup
);

router.post("/login", [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email.")
    .normalizeEmail()
    .trim(),
  authController.login,
]);

module.exports = router;
