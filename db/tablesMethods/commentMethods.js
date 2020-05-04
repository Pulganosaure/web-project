module.exports = {
    addComment: (articleId, authorId, comment ) => {
        try {
            db.prepare(`INSERT INTO comments ("articleId", "authorId", "text") values((?), (?), (?))`).run(articleId, authorId, comment)
        } catch(err) {
            console.log(err);
        }
    },
    getComments: (articleId) => {
        try {
            return db.prepare(`SELECT c.*, u.username FROM comments c INNER JOIN users u ON c.authorId = u.id where c.articleId = (?)`).all(articleId)
        } catch(err) {
            console.log(err);
        }
    },
    deleteUserComments: (userId) => {
        try {
            return db.prepare(`DELETE FROM comments WHERE authorId = (?)`).run(userId)
        } catch(err) {
            console.log(err);
        }
    },
    countUserComments: () => {
        try {

        } catch(err) {
            console.log(err)
        }
    }
}

