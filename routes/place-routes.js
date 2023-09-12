const express = require("express");
const placeControllers = require("../controllers/places-controllers");

router = express.Router();

router.get("/:pid", placeControllers.getPlaceById);

router.get("/user/:uid", placeControllers.getPlaceByUserId);

module.exports = router;
