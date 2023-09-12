const express = require("express");

router = express.Router();

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

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator == userId;
  });
  res.json({ place });
});

module.exports = router;
