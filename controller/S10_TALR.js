const db = require("../database/database_connection");
const db_all = require("../database/findout_all_rows");
const catchAsync = require("../utils/catchasync");

// S10_825TALRs_AndPairedUTRs
module.exports.UTRDetail = catchAsync(async function (req, res) {
  const UTRDetail_sql =
    "SELECT lncRNA_Transcript_ID,  UTR_element, Percentage_of_lncRNA_Transcript_Covered, Percentage_of_UTR_Covered FROM S10_TALRs_AndPairedUTRs;";
  const UTRDetail_data = await db_all(UTRDetail_sql);

  return res.status(200).json({
    status: "ok",
    data: UTRDetail_data,
  });
});

// S10_TargetsOf_TALRs
module.exports.TALRTarget = catchAsync(async function (req, res) {
  const TALRTarget_sql = "SELECT * FROM S10_TargetsOf_TALRs;";
  const TALRTarget_data = await db_all(TALRTarget_sql);

  return res.status(200).json({
    status: "ok",
    data: TALRTarget_data,
  });
});
