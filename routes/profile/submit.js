const express = require("express");
const router = express.Router();
const db = require("../../db/database")
const isAuthenticated = require("../../middlewares/isAuthenticated");

router.post("/updateProfile", isAuthenticated,  (req,res) => {
    try {
        const user = db.users.getUserById(req.session.user)
        if(user.email !== req.body.email && req.body.email !== "") {
            db.users.updateEmail(req.session.user, req.body.email)
        }
        if(user.username !== req.body.username && req.body.username !== "") {
            db.users.updateUsername(req.session.user, req.body.username)
        }
        res.redirect("/profile");
    } catch (e) {
        console.log(e);
    }
})



module.exports = router;