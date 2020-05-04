const express = require("express");
const router = express.Router();
const db = require("../../db/database")
const isAuthenticated = require("../../middlewares/isAuthenticated")


router.get("/", isAuthenticated, (req, res) => {
    try {
        const user = db.users.getUserById(req.session.user);
        res.render('profile/profile',{ user: {...user, isAuthenticated: !!user}});

    } catch(err) {
        console.log(err);
    }
});

router.get("/deletion/confirm", isAuthenticated, (req, res) => {
    try {
        const user = db.users.getUserById(req.session.user);
        res.render('profile/profileDeleteConfirmation',{ user: {...user, isAuthenticated: !!user}} );

    } catch(err) {
        console.log(err);
    }
});

router.get("/deletion/deleteProfile", isAuthenticated, (req, res) => {
    try {
        db.comments.deleteUserComments(req.session.user);
        db.articles.deleteAuthorArticles(req.session.user);
        db.users.deleteUser(req.session.user);
        req.session = null
        res.redirect("/");
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;