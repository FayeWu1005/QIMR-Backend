const express = require('express')
const {ExpressionLevels} = require('./../controller/S11_ExpressionLevel')
const router = express.Router()

router.route('/level').get(ExpressionLevels)


module.exports = router;