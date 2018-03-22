const connection = require("./connection.js");

const orm = {
    selectAll: function(burgerTable, cb) {
      const queryString = 'SELECT * FROM ' + burgerTable + ';';
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

   insertOne: function(burgerTable, column, burgerInput, cb) {
    const queryString = 'INSERT INTO ' + burgerTable + '(' + column.toString() + ') VALUES (?);';
    connection.query(queryString, [burgerInput], function(err, data) {
        if(err) throw err;
        cb(data);
    });
   },

   updateOne: function(burgerTable, burgerColumn, burgerValue, condition, conditionValue, cb) {
       const queryString = 'UPDATE ' + burgerTable + ' SET ' + burgerColumn + '=?' + ' WHERE ' + condition + '=?;';
       connection.query(queryString, [burgerValue, conditionValue], function(err, data) {
           if(err) throw err;
           cb(data);
       });

   },

   deleteOne: function(burgerTable, condition, conditionValue, cb) {
       var queryString = 'DELETE FROM ' + burgerTable + ' WHERE ' + condition + '=?;';
       connection.query(queryString, [conditionValue], function(err, data) {
           if(err) throw err;
           cb(data);
       });
   }
  };
  
  module.exports = orm;
  