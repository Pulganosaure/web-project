module.exports = (req, res, next) => {
    if (req.user.permission > 0) {
        return res.status(403).json({
            error: "Unauthorized"
        })
    }
    next()
};