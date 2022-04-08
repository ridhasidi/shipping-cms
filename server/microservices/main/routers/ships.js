const express = require("express");
const router = express.Router();
const Controller = require("../controllers/shipsControllers");

router.get("/", Controller.getShips);

module.exports = router;
