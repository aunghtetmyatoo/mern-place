const express = require("express");
const userControllers = require("../controllers/users-controllers");

router = express.Router();

router.get("/", userControllers.getUsers);

router.post("/signup", userControllers.signup);

router.post("/login", userControllers.login);

module.exports = router;
