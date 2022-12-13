require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./config/database");
const userRoutes = require("./routes/userRoutes")
const hardwareRoutes = require("./routes/hardwareRoutes")

db.connect();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/hardware", hardwareRoutes);

module.exports = app;