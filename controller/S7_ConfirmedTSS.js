const db = require("./../database/database_connection");
const db_all = require("./../database/findout_all_rows");
const catchAsync = require("./../utils/catchasync");

//S7_lncRNAs_with_LongRead_Support_AB  // Percentage_of_Long-Read_Covered

module.exports.confirmedTSS = catchAsync(async function (req, res) {
  const sql = "select * from S7_lncRNAs_with_TSS_AB";

  const data = await db_all(sql);

  return res.status(200).json({
    status: "ok",
    data: data,
  });
});
