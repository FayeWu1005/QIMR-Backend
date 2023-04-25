const express = require('express')
const {confirmedTSS} = require('./../controller/S7_ConfirmedTSS')
const router = express.Router()

router.route('/TSS').get(confirmedTSS)

module.exports = router;