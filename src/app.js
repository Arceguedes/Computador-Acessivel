require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./config/database");
const userRoutes = require("./routes/userRoutes")
const eventRoutes = require("./routes/eventRoutes")

db.connect();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=> res.status(200).send({
    "About": "",
    "Warning": "",
    "How to access": ""
}))

app.use("/users", userRoutes);
app.use("/events", eventRoutes);

module.exports = app;