module.exports = {
    getArticles: (max = -1) => {
        try {
            if(max >= 0) {
                return db.prepare(`SELECT a.*, u.username as authorUsername  FROM articles a INNER JOIN users u ON a.authorId = u.id LIMIT (?)`).all(max);
            } else
                return db.prepare(`SELECT a.*, u.username as authorUsername  FROM articles a INNER JOIN users u ON a.authorId = u.id`).all();

        } catch(err) {
            console.log(err);
            return false
        }
    },

    getArticleById: (id) => {
        try {
            return db.prepare(`SELECT * FROM articles WHERE id= (?)`).all(id);
        } catch(err) {
            console.log(err);
            return false
        }
    },
    addArticle: (title, content, author) => {
        try {
            db.prepare(`INSERT INTO articles ("content", "title", "authorId") values((?), (?), (?))`).run(title, content, author)
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    deleteArticle: (id) => {
        try {
            db.prepare(`DELETE FROM articles WHERE id = (?)`).run(id);
            return true;
        } catch(err){
            console.log(err)
            return false;
        }
    }
}