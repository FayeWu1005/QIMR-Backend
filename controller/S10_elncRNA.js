const db = require("../database/database_connection");
const db_all = require("../database/findout_all_rows");
const db_target_list = require("../database/elncRNATarget_list");
const catchAsync = require("../utils/catchasync");

// S10_elncRNAs_And_PairedEnhancers
module.exports.elncRNAEnhancer = catchAsync(async function (req, res) {
  // const enhancer_sql = "select * from S10_elncRNAs_And_PairedEnhancers";
  const enhancer_sql =
    "SELECT DISTINCT lncRNA_ID, Chr_Enhancer, Start_Enhancer, End_Enhancer FROM S10_elncRNAs_And_PairedEnhancers;";

  const enhancer_data = await db_all(enhancer_sql);

  return res.status(200).json({
    status: "ok",
    data: enhancer_data,
  });
});

// S10_TargetsOf_eIncRNAs
module.exports.elncRNATarget = catchAsync(async function (req, res) {
  const elncRNATarget_sql = "SELECT DISTINCT elncRNA, Target_GeneName FROM S10_TargetsOf_elncRNAs;";
  const elncRNAList_sql = "SELECT DISTINCT elncRNA FROM S10_TargetsOf_elncRNAs;";

  const elncRNATarget_data = await db_all(elncRNATarget_sql);
  const elncRNAList_data = await db_target_list(elncRNAList_sql);

  return res.status(200).json({
    status: "ok",
    // targetList: elncRNAList_data,
    data: elncRNATarget_data,
  });
});
