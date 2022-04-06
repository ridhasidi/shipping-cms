const express = require("express");
const authRouters = require("./users");
const shipsRouters = require("./ships");
const shipmentsRouters = require("./shipments");
const router = express.Router();

router.use("/", authRouters);
router.use("/ships", shipsRouters);
router.use("/shipments", shipmentsRouters);

module.exports = router;
