const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Dagon Center 3, Yangon",
    location: {
      lat: 16.8043886,
      long: 96.1377029,
    },
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id == placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place!", 404);
  }

  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator == userId;
  });

  if (!place) {
    return next(new HttpError("Could not find a place!", 404));
  }

  res.json({ place });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
