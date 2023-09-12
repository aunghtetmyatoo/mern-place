const HttpError = require("../models/http-error");
const { v4: uuid } = require("uuid");

let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Dagon Center 3, Yangon",
    description: "One of the most famous shopping center in Yangon",
    address: "No. 1, Pyay Road, Dagon Township, Yangon, Myanmar (Burma)",
    location: {
      lat: 16.8043886,
      lng: 96.1377029,
    },
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place!", 404);
  }

  res.json({ place });
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const places = DUMMY_PLACES.filter((p) => {
    return p.creator === userId;
  });

  if (!places || places.length === 0) {
    return next(new HttpError("Could not find a place!", 404));
  }

  res.json({ places });
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;

  const createdPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

const updatePlace = (req, res, next) => {
  const { title, description } = req.body;

  const placeId = req.params.pid;
  const updatedPlace = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  const placeIndex = DUMMY_PLACES.findIndex((p) => {
    return p.id === placeId;
  });

  updatedPlace.title = title;
  updatedPlace.description = description;
  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json(updatedPlace);
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => {
    return p.id !== placeId;
  });

  res.status(200).json({ message: "Deleted place." });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
