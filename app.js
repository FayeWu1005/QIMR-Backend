const express = require("express");
const path = require("path");
const sequenceRouter = require("./routes/sequence_data");
const lncRNA_transcript = require("./routes/lncRNA_transcript");
const S9_GencodeAnnotated = require("./routes/S9_GencodeAnnotated");
const S6_GenomicContext = require("./routes/S6_GenomicContext");
const S7_LongRead = require("./routes/S7_LongRead.js");
const S7_ConfirmedTSS = require("./routes/S7_ConfirmedTSS");
const geneMarkers = require("./routes/geneMarkers");
const S11_ExpressionCellType = require("./routes/S11_ExpressionCellType");
const S13_SeuratMarkersLclusters = require("./routes/S13_SeuratMarkersLclusters");
const S18_TCGAmarkersNBlncRNAs = require("./routes/S18_TCGAmarkersNBlncRNAs");
const resources = require("./routes/resources");
const S11_ExpressionLevel = require("./routes/S11_ExpressionLevel");
const S10_elncRNA = require("./routes/S10_elncRNA");
const S10_pancRNA = require("./routes/S10_pancRNA");
const S10_TALR = require("./routes/S10_TALR");

const AppError = require("./utils/apperror");
const GlobalError = require("./controller/globalError");

// cors package will solve the browser cross origin policy proble
const cors = require("cors");

const app = express();
// cors function will be solve the cross origin policy problem
app.use(cors());
// parse static files
app.use(express.static(path.join(__dirname, "public")));

// Mount routes
app.use("/api/v1/fasta", sequenceRouter);
app.use("/api/v1/genomic", lncRNA_transcript);
app.use("/api/v1/gen", S9_GencodeAnnotated);
app.use("/api/v1/context", S6_GenomicContext);
app.use("/api/v1/long", S7_LongRead);
app.use("/api/v1/confirmed", S7_ConfirmedTSS);
app.use("/api/v1/gene/markers", geneMarkers);
app.use("/api/v1/expression", S11_ExpressionCellType);
app.use("/api/v1/seurat", S13_SeuratMarkersLclusters);
app.use("/api/v1/markers", S18_TCGAmarkersNBlncRNAs);
app.use("/api/v1/resources", resources);
app.use("/api/v1/express", S11_ExpressionLevel);
app.use("/api/v1/elncRNA", S10_elncRNA);
app.use("/api/v1/panc", S10_pancRNA);
app.use("/api/v1/talr", S10_TALR);

app.all("*", function (req, res, next) {
  return next(
    new AppError(`can not find this url: ${req.originalUrl}`, 404) // using this syntax we can create an object
  );
});

app.use(GlobalError);

module.exports = app;
