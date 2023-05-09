const db = require("./../database/database_connection");
const db_all = require("./../database/findout_all_rows");
const catchAsync = require("./../utils/catchasync");

module.exports.ExpressionCellType = catchAsync(async function (req, res) {
  let imgPath = `images/expresscelltype/expresscelltype.JPG`;
  const sql = "select * from S11_ConsistentlyExpressed_in_C124";

  const data = await db_all(sql);

  return res.status(200).json({
    status: "ok",
    data: data,
    imgPath,
  });
});
