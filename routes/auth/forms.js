const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    try {
        if(req.session.user) return res.redirect("/profile")
        res.render('authForms/login', null);

    } catch(err) {
        console.log(err);
    }
});


router.get("/register", (req, res) => {
    try {
        if(req.session.user) return res.redirect("/profile")

        res.render('authForms/register', null);
    } catch(err) {
        console.log(err);
    }
});

router.get("/test", (req, res) => {
    {
        console.log(req.session);
        res.status(200).send(`<h1>${req.session.user}</h1>`)
    }
});

module.exports = router;