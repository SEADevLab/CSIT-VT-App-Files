require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const malwarefileRoutes = require("./routes/malwarefiles");


// express app
const app = express();

// middleware
app.use(express.json())
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use("/api/malwarefiles", malwarefileRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });