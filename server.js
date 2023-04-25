const sqlite3 = require('sqlite3').verbose();
const dotenv = require('dotenv')
const app = require('./app')



// connect environment file with our backend server
dotenv.config({
  path:'./config.env'
})

// connect database
// const db = new sqlite3.Database('./model/transcriptomics_data.sqlite', sqlite3.OPEN_READWRITE, function(error){
//   if(error){
//     return console.error(error.message)
//   }else{
//     console.log('Database is connected')
//   }
// })
// create a backend server

// listen a server
let port = process.env.PORT ;
app.listen(port ,function(){
  console.log("Server is running and port number is " +  port)
})


// module.exports= db;