'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'faq'
});
dbConn.connect(function(err,result) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;