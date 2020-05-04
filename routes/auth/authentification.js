const express = require("express");
const router = express.Router();
const db = require("../../db/database")
const bcrypt = require("bcryptjs");
const saltRounds =  12;


router.post("/login", async (req, res) => {
    try {
        if(req.session.user) return res.redirect("/profile")
        const user = db.users.userExist(req.body.email);
        if(!user) {
          return res.redirect("/auth/login")
        }

        if(bcrypt.compareSync(req.body.password, user.password)) {
            req.session.user = user.id
            return res.redirect("/")
        } else {
        return res.redirect("/auth/login?invalidCredentials")
        }

    } catch(err) {
        console.log(err);
    }
});

router.post("/register", async (req, res) => {
    try {
        if(req.session.user) return res.redirect("/profile")

        const {email, username, password, passwordConfirm} = req.body;
        if(!email) return res.redirect("/auth/register?emailMissing")
        if(!username) return res.redirect("/auth/register?invalidUsername")
        if(!password) return res.redirect("/auth/register?password")
        if(password !== passwordConfirm || !email) return res.redirect("/auth/register?invalidPasswords");

        const user = db.users.userExist(req.body.email);
        if(user) {
            return res.redirect("/auth/register?userExist")
        }
        else {
            let hashedPassword = bcrypt.hashSync(password, saltRounds);
            db.users.registerUser(username,email,hashedPassword);
            res.redirect("/auth/login")
        }
    } catch(err) {
        console.log(err);
    }
});

router.post("/register", (req, res) => {
    try {
        req.session = null;
        res.redirect("/")
    } catch(err) {
        console.log(err);
    }
});

router.get("/test", (req, res) => {
    try {
        console.log(req.session)
        res.redirect("/")
    } catch(err) {
        console.log(err);
    }
});



module.exports = router;