const express = require('express')
const {ExpressionCellType} = require('./../controller/S11_ExpressionCellType')
const router = express.Router()

router.route('/cell/type').get(ExpressionCellType)


module.exports = router;