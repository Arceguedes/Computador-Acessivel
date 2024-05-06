const express = require("express");
const router = express.Router();

const controller = require("../controllers/hardwareControllers");
const {checkAuth} = require("../middlewares/auth");

router.get("/show", controller.showItens);
router.post("/register",checkAuth, controller.registerItens)
router.delete("/delete/:id",checkAuth, controller.deleteItens);
router.get("/request",controller.requestPc)

module.exports = router;