const express = require("express");
const router = express.Router();
const Controller = require("../controllers/shipmentsControllers");

router.get("/", Controller.getShipments);

module.exports = router;
