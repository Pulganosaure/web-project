const express = require("express");
const router = express.Router();
const db = require("../../db/database")
const isAuthenticated = require("../../middlewares/isAuthenticated")
const isJournalist = require("../../middlewares/isJournalist")
router.get("/createArticle" , isAuthenticated, isJournalist, (req, res) => {
    try {
        const user = (req.session.user)
            ? db.users.getUserById(req.session.user)
            : null
        res.render('articles/createArticle', {user: {...user, isAuthenticated: !!user}});

    } catch(err) {
        console.log(err);
    }
});

module.exports = router;