const express = require("express");
const { UTRDetail, TALRTarget } = require("../controller/S10_TALR");
const router = express.Router();

router.route("/utr").get(UTRDetail);
router.route("/target").get(TALRTarget);

module.exports = router;
