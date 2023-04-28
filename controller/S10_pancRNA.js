const db = require("../database/database_connection");
const db_all = require("../database/findout_all_rows");
const catchAsync = require("../utils/catchasync");

// S10_1968pancRNAs_AndPairedPromoters
module.exports.pancRNA = catchAsync(async function (req, res) {
  const panc_sql =
    "SELECT lncRNA_ID, Chr_Promoter, Start_Promoter, End_Promoter, TargetGene FROM S10_pancRNAs_AndPairedPromoters;";
  const panc_data = await db_all(panc_sql);

  return res.status(200).json({
    status: "ok",
    data: panc_data,
  });
});
