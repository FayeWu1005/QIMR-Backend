
 const db = require('./database_connection')
 
 const db_all = async function(query){
    return new Promise(function(resolve,reject){
        db.all(query, function(err,rows){
        if(err){return reject(err);}
        resolve(rows);
        });
        });

 }
 module.exports = db_all