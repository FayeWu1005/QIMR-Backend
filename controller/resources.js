const catchAsync = require('./../utils/catchasync')

module.exports.datasetDownload= catchAsync(async function(req,res,next){
   
   
    
    return res.download("./public/resources/dataset.zip")
   
})

module.exports.sequenceFastaDatasetDownload = catchAsync(async function(req,res,next){
   
   
    
    return res.download("./public/resources/dataset _fasta.zip")
   
})
