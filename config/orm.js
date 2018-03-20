const connection = require("./connection.js");

const orm = {
    selectAll: function(burgerTable, response) {
      const queryString = 'SELECT * FROM' + burgerTable;
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

   insertOne: function(burgerTable, column, burgerInput, response) {
    const queryString = 'INSERT INTO ' + burgerTable + '(' + column + ') VALUES (?)';
    connection.query(queryString, [burgerInput], function(err, data) {
        if(err) throw err;
        response(data);
    });
   },

   updateOne: function(burgerTable, burgerColumn, burgerValue, condition, conditionValue, response) {
       const queryString = 'UPDATE ' + burgerTable + ' SET ' + burgerColumn + '=?' + 'WHERE' + condition + '=?';
       connection.query(queryString, [burgerValue, conditionValue], function(err, data) {
           if(err) throw err;
           response(data);
       });

   },

   deleteOne: function(burgerTable, condition, conditionValue, response) {
       var queryString = 'DELETE FROM ' + burgerTable + ' WHERE ' + condition + '=?';
       connection.query(queryString, [conditionValue], function(err, data) {
           if(err) throw err;
           response(data);
       });
   }
  };
  
  module.exports = orm;
  