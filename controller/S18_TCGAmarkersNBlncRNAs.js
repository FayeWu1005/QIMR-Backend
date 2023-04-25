const db = require('./../database/database_connection')
const db_all = require('./../database/findout_all_rows')
const catchAsync = require('./../utils/catchasync')

module.exports.TCGAmarkersNBlncRNAs= catchAsync(async function(req,res, next){
    let imgPath = `images/cancertype/markercancertypes.jpg`
    const sql = 'select * from  S18_TCGAmarkers_NBlncRNAs'
   
    const data = await  db_all(sql)
    let arrData;
    
  if(data){
    arrData = data.filter(function(item, index){
        if(req.params.id === item.key){
            return item.value
        }
       })
  }
  
   return res.status(200).json({
    status:'ok',
    arrData,
    imgPath
   })

})