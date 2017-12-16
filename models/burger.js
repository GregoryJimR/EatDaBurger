var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        console.log("burger.js all");
        orm.selectAll("burgers", function(res) {
            cb(res);
            console.log("burger.js cb(res)");
        });
    },

    create: function(cols, vals, cb) {
        console.log("burger.js create");
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
            console.log("cb(res) at burger.js burger.create" + res);
        });
    },
    update: function(objColVals, condition, cb) {
        console.log("burger.js update");
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
