const express = require("express");
const {
  eIncRNAEnhancer,
  eIncRNATarget,
} = require("./../controller/S10_eIncRNA");
const router = express.Router();

router.route("/eIncRNAEnhancer").get(eIncRNAEnhancer);
router.route("eIncRNATarget").get(eIncRNATarget);

module.exports = router;
