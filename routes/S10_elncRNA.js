const express = require("express");
const {
  elncRNAEnhancer,
  elncRNATarget,
} = require("../controller/S10_elncRNA");
const router = express.Router();

router.route("/enhancer").get(elncRNAEnhancer);
router.route("/target").get(elncRNATarget);

module.exports = router;
