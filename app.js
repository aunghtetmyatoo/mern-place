const express = require("express");
const bodyParser = require("body-parser");
const placeRoutes = require("./routes/place-routes");
const userRoutes = require("./routes/user-routes");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");

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

mongoose
  .connect(
    "mongodb+srv://ahmo:Ayqi7QIF1ndnT0Ow@cluster0.grwrnvg.mongodb.net/places?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch(() => {
    console.log("Connection failed!");
  });
