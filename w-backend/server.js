const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const trackingRoutes = require("./routes/trackings");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/trackings", trackingRoutes);

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("connected to database");
    app.listen(4000, () => {
      console.log("listening for requests on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
