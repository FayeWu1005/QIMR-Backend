const express = require('express')
const {SeuratMarkersLclusters} = require('./../controller/S13_SeuratMarkersLclusters')
const router = express.Router()

router.route('/markers/lclusters').get(SeuratMarkersLclusters)


module.exports = router;