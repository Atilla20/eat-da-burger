const burger = require("../models/burger.js");

const express = require("express");

const router = express.Router();



//Creating all the routes and seting up the logic within those routes
router.get("/", function (req, res) {
    /*var emptyArrays = {
        burger: [],*/
    res.redirect("/burgers");
    
});
/*
//Takes data from burger table
connection.selectAll(function(data) {
    for(var i = 0; i < data.length; i++) {
        emptyArrays.burger.push(data[i]);
    }
//Send it to index.handlebars
res.render('index', emptyArrays);
});
});
*/

router.get("/burgers", function(req,res) {
    burger.selectAll(function(burgerData) {
        res.render("index", {burger_data: burgerData});
    });
});




router.post('/create', function(req, res) {
    burger.insertOne([req.body.burgerInput], function() {
        res.redirect('/');
    });
});

router.put('/update/:id', function(req, res) {
    burger.updateOne([req.body.devoured], [req,params.id], function() {
        res.redirect('/');
    });
});

router.delete('/delete/:id', function(req, res) {
    burger.deleteOne([req.params.id], function() {
        res.redirect('/');
    });
});



module.exports = router;