const catchAsync = require('../utils/catchasync')

module.exports.geneMarkersImageParsing = catchAsync(async function (req,res,next){
  

    let imgPath=`images/genemarkers/${req.params.q}.jpeg`
    let placeholderImg = `images/genemarkers/placeholder.jpeg`

    return res.status(200).json({
        status:"ok",
        placeholerImg: placeholderImg,
        imgPath: imgPath
    })
})

