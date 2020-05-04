const db = require("../db/database")

module.exports = (req, res, next) => {
    if(req.session.user) {
        const user = db.users.getUserById(req.session.user)
        console.log(user)
        if(user.isJournalist === 1) {
            return next()
        }
    }
    return res.redirect("/articles")
};