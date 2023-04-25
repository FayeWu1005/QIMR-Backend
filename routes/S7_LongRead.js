const express = require('express')
const {longRead} = require('./../controller/S7_LongRead')
const router = express.Router()

router.route('/read').get(longRead)

module.exports = router;