const express = require("express");
const router = express.Router();


router.post("/login", (req, res) => {
    try {
        req.session.user = "dagh";
        res.redirect("/auth/test");
    } catch(err) {
        console.log(err);
    }
});

router.post("/register", (req, res) => {
    try {

    } catch(err) {
        console.log(err);
    }
});

router.post("/register", (req, res) => {
    try {

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