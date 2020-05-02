// controller/user.js

// impor user schema from model
const User = require("../models/user");

// create and export signup function with reg, res arg
exports.signup = (req, res) => {
    // console log is the way to see what we get fro the req.body
    console.log("req.body", req.body);
    // create new User and all about the User from the body
    // here we use the body-parser that installed earlier
    const user = new User(req.body);
    // once we got new user, and save it to db by using
    // call back func to handle it
    // and we will get either err or user
    user.save((err, user) => {
        // display error if there was an error
        if (err) {
            return res.status(400).json({
                error
            });
        }
        // save it if there was NO error
        res.json({
            user
        });
    });
};
