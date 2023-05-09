function developmentError(error, req, res) {
  return res.status(error.statuscode).json({
    status: error.status,
    message: error.message,
    error: error,
  });
}
function productionError(error, req, res) {
  if (error.isoperational) {
    //  when our application creates an error by a user then if block code will be executed
    return res.status(error.statuscode).json({
      status: error.status,
      message: error.message,
    });
  } else {
    // when the programmer creates an error then else block code will be executed
    return res.status(500).json({
      status: "error",
      message: "something went error!!!",
    });
  }
}

module.exports = function (error, req, res, next) {
  error.statuscode = error.statuscode || 500;
  error.status = error.status || "error";
  if (process.env.NODE_ENV === "development") {
    developmentError(error, req, res);
  } else if (process.env.NODE_ENV === "production") {
    productionError(error, req, res);
  }
};
