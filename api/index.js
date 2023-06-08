const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const UserModel = require("./models/User.js");
require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

// parser
app.use(express.json());

// linked of client with server
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGODB_URI);

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userDoc = await UserModel.create({
    name,
    email,
    password: bcrypt.hashSync(password, bcryptSalt),
  });
  res.json(userDoc);
});

app.listen(4000);
