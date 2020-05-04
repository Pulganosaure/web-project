const db = require("../db/database")

module.exports = (req, res, next) => {
    if(req.session.user) {
        const user = db.users.getUserById(req.session.id)
        if(user.isAdmin === 1) {
            return next()
        }
    }
    return res.redirect("/");
};