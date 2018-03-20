const orm = require("../config/orm.js");

//console log all of the burger names
var burgers = {
    selectAll: function(response) {
        orm.selectAll('burgers', function(res) {
            response(res);
        });
    },
    insertOne: function(value, response) {
        orm.insertOne('burgers', 'burger_name', value, function(res) {
            response(res);
        });
    },
    updateOne: function(columnValue, conditionValue, response) {
        orm.updateOne('burgers', 'devoured', columnValue, 'id', conditionValue, function(res) {
            response(res);
        });
    },
    deleteOne: function(conditionValue, response) {
        orm.deleteOne('burgers', 'id', conditionValue, function(res) {
            response(res);
        });
    }
};

module.exports = burgers;