class signup {
  check = (body) => {
    return [
      body("name").not().isEmpty(),
      body("email").normalizeEmail().isEmail(),
      body("password").isLength({ min: 6 }),
    ];
  };
}

class login {
  check = (body) => {
    return [
      body("email").normalizeEmail().isEmail(),
      body("password").isLength({ min: 6 }),
    ];
  };
}

exports.signup = new signup();
exports.login = new login();
