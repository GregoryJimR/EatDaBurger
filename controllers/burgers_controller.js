var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    console.log("routing on root");
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
        console.log("not rendering to index?");
    });
});

router.post("/api/burger", function(req, res) {
    console.log("routing on post");
    burger.create("name", req.body.name, function(result) {
        res.json({ id: result.insertId });
        console.log("result: " + result);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log("routing on put");
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devour: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;
