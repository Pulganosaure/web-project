module.exports = {
    userExist: (email ) => {
        try {
            return db.prepare(`SELECT * FROM users WHERE email = (?) LIMIT 1`).get(email);
        } catch(err) {
            console.log(err);
        }
    },
    getUserById: (id ) => {
        try {
            return db.prepare(`SELECT * FROM users WHERE id = (?)`).get(id);
        } catch(err) {
            console.log(err);
        }
    },
    registerUser: (username, email, password) => {
        try {
            db.prepare(`INSERT INTO users (username, email, password) values(?, ?, ?)`).run(username, email, password);
        } catch(err) {
            console.log(err);
        }
    },
    deleteUser: (userId) => {
        try {
            db.prepare(`DELETE FROM users WHERE id= (?)`).run(userId);
        } catch(err) {
            console.log(err);
        }
    },
    updatePassword: (userId, password) => {
        try {
            db.prepare(`UPDATE users SET password = (?) where id= (?) LIMIT 1`).run(password, userId);
        } catch(err) {
            console.log(err);
        }
    },
    updateEmail: (userId, email) => {
        try {
            db.prepare(`UPDATE users SET email = (?) where id= (?) LIMIT 1`).run(email, userId);
        } catch(err) {
            console.log(err);
        }
    },
    updateUsername: (userId, username) => {
        try {
            db.prepare(`UPDATE users SET username = (?) where id= (?) LIMIT 1`).run(username, userId);
        } catch(err) {
            console.log(err);
        }
    }

}