'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Category = function(category){
  this.id_category     = category.id_category;
  this.category      = category.category;
  
};
Category.create = function (newEmp, result) {
dbConn.query("INSERT INTO category set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Category.findById = function (id, result) {
dbConn.query("Select * from category where id_category = ? ", id, function (err, res) {
  
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Category.findAll = function (result) {
dbConn.query("Select * from category", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('category : ', res);
  result(null, res);
}
});
};
Category.update = function(id, category, result){
dbConn.query("UPDATE category SET category=? WHERE id_category = ?", [category.category, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Category.delete = function(id, result){
dbConn.query("DELETE FROM category WHERE id_category = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Category;

