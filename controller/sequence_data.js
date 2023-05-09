const fs = require("fs/promises");
const fastaParser = require("fasta-js");
const catchAsync = require("./../utils/catchasync");

module.exports.fastaDataOne = catchAsync(async function (req, res) {
  // create an js object
  const fasta = new fastaParser();
  // fasta file one code start

  const fastaDataOne = await fs.readFile(
    "./data/Trinity_C_NormalCells.Trinity1.fasta",
    "utf-8"
  );
  const seqOne = fasta.parse(fastaDataOne); // this line will convert fasta data to javascript object

  if (seqOne) {
    return res.status(200).json({
      // json method will convert our javascript object to json object
      message: "Success",
      status: "ok",
      seqOne: seqOne,
    });
  }
});

module.exports.fastaDataTwo = catchAsync(async function (req, res) {
  // i want to create an js object
  const fasta = new fastaParser();

  // fasta file two code start

  const fastaDataTwo = await fs.readFile(
    "./data/Trinity_C_NormalCells.Trinity2.fasta",
    "utf-8"
  );
  const seqTwo = fasta.parse(fastaDataTwo); // this line will convert fasta data to javascript object

  if (seqTwo) {
    return res.status(200).json({
      // json method will convert out javascript object to json object
      message: "Success",
      status: "ok",
      seqTwo: seqTwo,
    });
  }
});

// ejs or pug template
