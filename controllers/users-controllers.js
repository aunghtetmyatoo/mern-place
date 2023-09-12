const HttpError = require("../models/http-error");
const { v4: uuid } = require("uuid");

let DUMMY_USERS = [
  {
    id: "u1",
    name: "Aung Aung",
    email: "aung@gmail.com",
    password: "123",
  },
];

const getUsers = (req, res, next) => {
    res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
    const { name, email, password } = req.body;
    const hasUser = DUMMY_USERS.find((user) => user.email === email);
    if (hasUser) {
        throw new HttpError("Could not create user, email already exists!", 422);
    }
    const createdUser = {
        id: uuid(),
        name,
        email,
        password,
    };
    DUMMY_USERS.push(createdUser);

    res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
    const { email, password } = req.body;
    const identifiedUser = DUMMY_USERS.find((user) => user.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
        throw new HttpError("Could not identify user, credentials seem to be wrong.", 401);
    }
    res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
