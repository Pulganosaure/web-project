const express = require("express");
const router = express.Router();
const db = require("../../db/database")
const isAuthenticated = require("../../middlewares/isAuthenticated")
const isJournalist = require("../../middlewares/isJournalist")
router.get("/createArticle" , isAuthenticated, isJournalist, (req, res) => {
    try {
        res.render('articles/createArticle', null);

    } catch(err) {
        console.log(err);
    }
});

module.exports = router;