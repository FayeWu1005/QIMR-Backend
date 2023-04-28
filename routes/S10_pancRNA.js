const express = require("express");
const { pancRNA } = require("../controller/S10_pancRNA");
const router = express.Router();

router.route("/associate").get(pancRNA);
module.exports = router;
