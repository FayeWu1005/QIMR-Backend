const express = require('express')
const {gencodeAnnotated,lnc2CancerMatches} = require('./../controller/S9_GencodeAnnotated')
const router = express.Router()

router.route('/code/annotated').get(gencodeAnnotated)
router.route('/lnc2cancermatches').get(lnc2CancerMatches)

module.exports = router;