class AppError extends Error{
    constructor(message, statuscode){
          super(message)
          this.statuscode = statuscode;
          this.status = `${this.statuscode}`.startsWith('4') ? 'fail' : 'error';
          this.isoperational = true // when our application creates an error by a user it will create an error
          // when programmer creates an error then we do not use this operational property
    }
}

module.exports = AppError;



