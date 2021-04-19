const express = require("express");
var BooksRouter = express.Router();

const BooksData = require('../models/bookdata');

// Start - Code for getting Books
BooksRouter.get('/getbooks', function (req, res) {
    BooksData.find().then(function (data) {
        res.send(data);
    });
});

BooksRouter.post('/getbook', function (req, res) {
    let id = req.body.id;
    BooksData.findById(id).then(function (data) {
        res.send(data);
    });
});
// End - Code for getting Books


// Start - Code for Adding Books

BooksRouter.post('/addbook', function (req, res) {

    var book = BooksData(req.body.book);
    book.save();
    res.send({ "message": "success" });

});

// End - Code for Adding Books

// Start - Code for Deleting Books

BooksRouter.post('/deletebook', function (req, res) {

    BooksData.findByIdAndDelete({ _id: req.body.id }).then((result) => {
        res.send({ "message": "success" });
    });

});

// End - Code for Deleting Books

// Start - Code for Deleting Books

BooksRouter.post('/updatebook', function (req, res) {
    

    BooksData.findByIdAndUpdate(req.body.book._id, req.body.book, function (err, result) {
        if (err) console.log(err)
        else {
            res.send({ "message": "success" });
        }
    });

});

// End - Code for Deleting Books

module.exports = BooksRouter;