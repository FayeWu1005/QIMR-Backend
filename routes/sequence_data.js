const express = require('express')
const {fastaDataOne, fastaDataTwo} = require('./../controller/sequence_data')

const router =express.Router()

router.route('/data/one').get(fastaDataOne)
router.route('/data/two').get(fastaDataTwo)
module.exports = router;