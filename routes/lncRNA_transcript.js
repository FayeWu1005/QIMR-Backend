const express = require('express')
const {genomicCoordinates} = require('./../controller/lncRNA_transcript')
const router = express.Router()

router.route('/coordinates/:id').get(genomicCoordinates)

module.exports = router;