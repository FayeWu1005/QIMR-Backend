
const db = require('./../database/database_connection')
const db_all = require('./../database/findout_all_rows')
const catchAsync = require('./../utils/catchasync')


module.exports.SeuratMarkersLclusters =catchAsync( async function (req,res,next){

    const sql = 'select * from S13_SeuratMarkers_Lclusters';
   
    const data = await  db_all(sql)

    return res.status(200).json({
        status:'ok',
        data:data
    })
})

