const express = require("express");
const authRouters = require("./users");
const shipsRouters = require("./ships");
const shipmentsRouters = require("./shipments");
const { authentification } = require("../middlewares/authn");
const router = express.Router();

router.use("/", authRouters);
router.use(authentification);
router.use("/ships", shipsRouters);
router.use("/shipments", shipmentsRouters);

module.exports = router;
