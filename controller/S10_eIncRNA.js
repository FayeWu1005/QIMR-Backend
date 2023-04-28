const db = require("../database/database_connection");
const db_all = require("../database/findout_all_rows");
const catchAsync = require("../utils/catchasync");

// S10_elncRNAs_And_PairedEnhancers
module.exports.eIncRNAEnhancer = catchAsync(async function (req, res) {
  const enhancer_sql = "select * from S10_elncRNAs_And_PairedEnhancers";

  const enhancer_data = await db_all(enhancer_sql);

  return res.status(200).json({
    status: "ok",
    data: enhancer_data,
  });
});

// S10_TargetsOf_eIncRNAs
module.exports.eIncRNATarget = catchAsync(async function (req, res) {
  const eIncRNATarget_sql = "select * from S10_TargetsOf_elncRNAs";

  const eIncRNATarget_data = await db_all(eIncRNATarget_sql);

  return res.status(200).json({
    status: "ok",
    data: eIncRNATarget_data,
  });
});
