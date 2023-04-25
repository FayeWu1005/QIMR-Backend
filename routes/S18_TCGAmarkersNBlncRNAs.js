const express = require('express')
const {TCGAmarkersNBlncRNAs} = require('./../controller/S18_TCGAmarkersNBlncRNAs')
const router = express.Router()

router.route('/lncrna/:id').get(TCGAmarkersNBlncRNAs)


module.exports = router;