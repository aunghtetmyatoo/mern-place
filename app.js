const express = require("express");
const bodyParser = require("body-parser");
const placeRoutes = require("./routes/place-routes");
const userRoutes = require("./routes/user-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placeRoutes);
app.use("/api/users", userRoutes);

//route error handling
app.use((req, res, next) => {
  throw new HttpError("Could not find this route!", 404);
});

app.use((err, req, res, next) => {
  if (err.headersSent) {
    next(err);
  }
  res.status(err.code || 500);
  res.json({ error: err.message } || "Something went wrong!");
});

app.listen(5000);
