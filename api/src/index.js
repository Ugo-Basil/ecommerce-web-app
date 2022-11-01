require('dotenv').config();

const bodyParser = require('body-parser');
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRouter = require("./routes/products.js");
const userRouter = require("./routes/user.js");
const paymentRouter = require("./routes/payment.js");
const orderRouter = require("./routes/order.js");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

app.use(cors()); "mongodb+srv://basil:admin@cluster0.m7y6hxi.mongodb.net/?retryWrites=true&w=majority";

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
app.use("/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api", orderRouter);
app.use("/api", paymentRouter);


app.listen(port, () => console.log(`Listening on localhost:${port}`));
