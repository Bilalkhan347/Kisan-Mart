const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const encorder = bodyParser.urlencoded();
const app = express();
require("./db/conn");
const User = require("./models/user");
const port = process.env.PORT || 5000;
const static_path = path.join(__dirname, "../public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
console.log(path.join(__dirname, "../public"));
app.get("/", (req, res) => {
    res.render("index")
    console.warn("Running Haome PAge");
});

app.get("/index", encorder, (req, res) => {
    // res.render("index");
    // console.log(req.body.signup_pwd);
    // const data = new User({
    //     username: req.body.signup_username,
    //     email: req.body.signup_useremail,
    //     password: req.body.signup_pwd,
    // });
    // data.save().then((result) => {
    //         console.log("Registered");
    //         res.render("register");
    //     })
    //     .catch((err) => console.log("Error"));
    console.warn("kaj");
    res.render("index");
    try {
        const password = req.body.signup_pwd;
        const cpassword = req.body.repwd;
        if (password == cpassword) {
            const registerEmployee = new Register({
                signup_username: req.body.signup_username,
                signup_useremail: req.body.signup_useremail,
                signup_pwd: req.body.signup_pwd,
                repwd: req.body.repwd
            })
            const registered = registerEmployee.save();
            res.status(201).render("index");
        } else {
            res.send("password are not matching")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})