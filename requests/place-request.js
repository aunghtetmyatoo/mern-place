class createPlace {
  check = (body) => {
    return [
      body("title").not().isEmpty(),
      body("description").isLength({ min: 5 }),
      body("address").not().isEmpty(),
    ];
  };
}

class updatePlace {
  check = (body) => {
    return [
      body("title").not().isEmpty(),
      body("description").isLength({ min: 5 }),
    ];
  };
}

exports.createPlace = new createPlace();
exports.updatePlace = new updatePlace();
