const express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));

// Cross-origin Execution Policy
const cors = require('cors');
app.use(cors());

// Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const BooksRouter = require('./src/routes/books');
app.use('/books', BooksRouter);

const AuthorsRouter = require('./src/routes/authors');
app.use('/authors', AuthorsRouter);

const LoginRouter = require('./src/routes/login');
app.use('/users', LoginRouter);

app.get('/', function (req, res) {
    res.send('yes');
});

// Listening
const port = process.env.PORT | 5555;
app.listen(port, function () {
    console.log("Listening at " + port);
});