const express = require('express')
const {geneMarkersImageParsing } = require('../controller/gene_Markers')
const router = express.Router()

router.route('/image/parsing/:q').get(geneMarkersImageParsing )

module.exports = router;