require('dotenv').config();

const bodyParser = require('body-parser');
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

app.use(cors()); 

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const url = process.env.MONGO_DB

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
  

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.get('/', (req, res) => res.status(200).send("Home page"));

app.listen(port, () => console.log(`Listening on localhost:${port}`));

