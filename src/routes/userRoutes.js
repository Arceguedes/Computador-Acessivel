const express = require("express");
const router = express.Router();

const controller = require("../controllers/userControllers");

router.post("/create", controller.createUser);
router.post("/login", controller.login);

module.exports = router;