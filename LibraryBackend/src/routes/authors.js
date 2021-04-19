const express = require("express");
var AuthorsRouter = express.Router();

const AuthorsData = require('../models/authordata');

// Start - Code for getting Authors
AuthorsRouter.get('/getauthors', function (req, res) {
    AuthorsData.find().then(function (data) {
        res.send(data);
    });
});

AuthorsRouter.post('/getauthor', function (req, res) {
    let id = req.body.id;
    AuthorsData.findById(id).then(function (data) {
        res.send(data);
    });
});
// End - Code for getting Authors


// Start - Code for Adding Authors

AuthorsRouter.post('/addauthor', function (req, res) {
    var item = req.body;
    item.books = item.books.split('\n');
    var author = AuthorsData(item);
    author.save();
    res.send({ "message": "success" });

});

// End - Code for Adding Authors

// Start - Code for Adding Authors

AuthorsRouter.post('/deleteauthor', function (req, res) {
    
    AuthorsData.findByIdAndDelete({ _id: req.body.id }).then((result) => {
        res.send({ "message": "success" });
    });

});

// End - Code for Adding Authors

module.exports = AuthorsRouter;