const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./model/transcriptomics_data.sqlite', sqlite3.OPEN_READWRITE, function(error){
    if(error){
      return console.error(error.message)
    }else{
      console.log('Database is connected')
    }
  })

  module.exports= db