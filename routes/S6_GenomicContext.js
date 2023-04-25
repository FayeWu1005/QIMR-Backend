const express = require('express')
const {genomicContext} = require('./../controller/S6_GenomicContext')
const router = express.Router()

router.route('/genomic/context').get(genomicContext)

module.exports = router;