const express = require("express");
const bodyParser = require("body-parser");
const placeRoutes = require("./routes/place-routes");

const app = express();

app.use("/api/places", placeRoutes);

app.use((err, req, res, next) => {
  if (err.headersSent) {
    next(err);
  }
  res.status(err.code || 500);
  res.json({ error: err.message } || "Something went wrong!");
});

app.listen(5000);
