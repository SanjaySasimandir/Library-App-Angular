const express = require("express");
var LoginRouter = express.Router();

var RegistrationData = require("../models/registrationdata");

LoginRouter.post('/register', function (req, res) {
    var user = RegistrationData(req.body.user);
    user.save();
    res.send({ "message": "success" });
});

LoginRouter.post('/login', function (req, res) {
    var user = req.body.user;
    RegistrationData.find({ email: user.email }).then(data => {
        if (data[0]) {
            if (data[0].password == user.password) {
                res.send({ "message": "success" });
            }
        }
        else {
            RegistrationData.find({ username: user.email }).then(usernamedata => {
                if (usernamedata[0].password == user.password) {
                    res.send({ "message": "success" });
                }
            })
        }
    })
});

module.exports = LoginRouter;