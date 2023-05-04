const db = require("./database_connection");

const db_target_list = async function (query) {
  const targetList = [];
  return new Promise(function (resolve, reject) {
    db.all(query, function (err, rows) {
      if (err) {
        return reject(err);
      }
      //   resolve(rows);
      rows.forEach((element) => {
        if (!targetList.includes(element)) {
          const id = element.elncRNA;
          targetList.push(id);
        }
      });
      resolve(targetList);
    });
  });
};

module.exports = db_target_list;
