const express = require("express");
const { body } = require("express-validator");
const placeRequest = require("../requests/place-request");
const placeControllers = require("../controllers/places-controllers");

router = express.Router();

router.get("/:pid", placeControllers.getPlaceById);

router.get("/user/:uid", placeControllers.getPlacesByUserId);

router.post(
  "/",
  placeRequest.createPlace.check(body),
  placeControllers.createPlace
);

router.patch(
  "/:pid",
  placeRequest.updatePlace.check(body),
  placeControllers.updatePlace
);

router.delete("/:pid", placeControllers.deletePlace);

module.exports = router;
