const express = require("express");
const { body } = require("express-validator");
const userRequest = require("../requests/user-request");
const userControllers = require("../controllers/users-controllers");

router = express.Router();

router.get("/", userControllers.getUsers);

router.post("/signup", userRequest.signup.check(body), userControllers.signup);

router.post("/login", userRequest.login.check(body), userControllers.login);

module.exports = router;
