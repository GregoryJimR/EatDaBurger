var connection = require("../config/connection.js");

//methods for retrieving and storing data in burgers_db

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }

    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        console.log("orm/selectAll");
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            //console.log("orm cb(result)" + result)
        });
    },

    insertOne: function(table, cols, vals, cb) {
        console.log("orm/insertOne");
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += "?";
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            console.log("orm.insertOne result at orm.js: " + result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        console.log("orm/updateOne");
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += "devoured = 1";
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
        });
    }
};


module.exports = orm;
