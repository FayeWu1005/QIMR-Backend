
const db = require('./../database/database_connection')
const db_all = require('./../database/findout_all_rows')
const catchAsync = require('./../utils/catchasync')


module.exports.genomicCoordinates =catchAsync( async function (req,res,next){
    // req.params.id
    let id = `TRINITY_${req.params.id}`
   

    const sql = `select * from S6_NBlncRNAs where lncRNA_transcript = '${id}'`;
   
   
    const data = await  db_all(sql)
   


    return res.status(200).json({
        status:'ok',
        data:data
    })
})

