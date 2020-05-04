const express = require("express");
const router = express.Router();
const db = require("../../db/database")

router.get("/", (req, res) => {
    try {
        const articles = db.articles.getArticles(5);
       //const solutions = db.
        const user = (req.session.user)
            ? db.users.getUserById(req.session.user)
            : null

        res.render('homePage/homePage',
            {
                articles: articles,
                user: {
                    ...user,
                    isAuthenticated: user !== null
                }
            });
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;