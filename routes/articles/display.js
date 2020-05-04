const express = require("express");
const router = express.Router();
const db = require("../../db/database")

router.get("/:id", (req, res) => {
    try {
        const user = req.session.user ? db.users.getUserById(req.session.user) : null
        const article = db.articles.getArticleById(req.params.id).shift();
        const comments = db.comments.getComments(req.params.id);
        console.log(comments)
        if(!article) {
            res.redirect('/')
        }
        res.render('articles/displayArticle', {
            ...article,
            comments,
            user: {
                ...user,
                isAuthenticated: user !== null
            }});

    } catch(err) {
        console.log(err);
    }
});

router.get("/", (req, res) => {
    try {
        const user = req.session.user ? db.users.getUserById(req.session.user) : null

        const articles = db.articles.getArticles(30).map(article => {
            article.isAuthor = article.authorId === req.session.user
            article.content = article.content.slice(0,200)
            console.log(article)
            return article;
        })
        res.render('articles/articlesList',{ articles: articles, user: {
                ...user,
                isAuthenticated: user !== null
            }
        });

    } catch(err) {
        console.log(err);
    }
});

module.exports = router;