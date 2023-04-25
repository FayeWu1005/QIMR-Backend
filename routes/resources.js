const express = require('express')
const {datasetDownload,sequenceFastaDatasetDownload } = require('./../controller/resources')
const router = express.Router()

router.route('/csv').get(datasetDownload )
router.route('/fasta').get(sequenceFastaDatasetDownload)

module.exports = router;