const express = require("express");
const router = express.Router();

const controller = require("../controllers/hardwareControllers");
const {checkAuth} = require("../middlewares/auth");

router.get("/show", controller.showItens);
router.post("/register",controller.registerItens)
router.put("/edit",controller.editItens);
router.post("/select",controller.selectItens)
router.get("/request",controller.requestPc)

module.exports = router;