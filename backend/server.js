const express = require("express");
const app = express();
const db = require('./db')
const { Pool } = require("pg");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const loginRoute = require("./routes/login.routes");
const registrationRoute = require("./routes/signup.routes")
const chatGptRoute = require("./routes/chatGPT.routes")

app.use("/login", loginRoute);
app.use("/signup", registrationRoute);
app.use("/mydata", chatGptRoute);


app.listen(3001, () => {
  console.log("Server listening on port " + "3001");
});

