const db = require('./../database/database_connection')
const db_all = require('./../database/findout_all_rows')
const catchAsync = require('./../utils/catchasync')

module.exports.gencodeAnnotated=  catchAsync(async function(req, res){
        const sql = 'select * from S9_GencodeAnnotated';
   
   
        const data = await  db_all(sql)
       
        return res.status(200).json({
            status:'ok',
            data:data
        })
})
//  S9_LNC2Cancer_lncRNAfunc_Matches
module.exports.lnc2CancerMatches =catchAsync( async function(req,res){
    
        const sql = 'select * from  S9_LNC2Cancer_lncRNAfunc_Matches';
   
   
        const data = await  db_all(sql)
       
        return res.status(200).json({
            status:'ok',
            data:data
        })

  
})