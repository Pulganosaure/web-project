const express = require("express");
const router = express.Router();
const db = require("../../db/database")
const isAuthenticated = require("../../middlewares/isAuthenticated");
const isJournalist = require("../../middlewares/isAuthenticated");

router.post("/addArticle", isAuthenticated, isJournalist, (req, res) => {
    try {
        const {title, content} = req.body;
        db.articles.addArticle(title, content, 1)
        res.redirect("/articles")
    } catch(err) {
        console.log(err);
    }
});

router.post("/editArticle", isAuthenticated, (req, res) => {
    try {

    } catch(err) {
        console.log(err);
    }
});

router.post("/:id/publishComment", isAuthenticated,  (req,res) => {
    try {
        db.comments.addComment(req.params.id,req.session.user, req.body.comment)
        res.redirect(`/articles/${req.params.id}` )
    } catch (e) {
        console.log(e);
    }
})


module.exports = router;