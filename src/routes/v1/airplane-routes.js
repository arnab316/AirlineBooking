const express = require("express");
const { AirplaneController } = require("../../controllers");
const router = express.Router();
const validateCheck = require('../../middlewares/index');
// api/v1/airplanes POST
router.post("/create", validateCheck,AirplaneController.createAirplanes);

router.get("/", AirplaneController.getAllAirplanes)

module.exports = router;
