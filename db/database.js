const  Sqlite = require('better-sqlite3');

const userMethods = require("./tablesMethods/userMethods")
const articleMethods = require("./tablesMethods/articleMethods")
const societyMethods = require("./tablesMethods/societyMethods")
const commentMethods = require("./tablesMethods/commentMethods")

db = new Sqlite('./db/database.db')

/*
//db.prepare("DROP TABLE users").run();
//db.prepare("DROP TABLE articles").run();
//db.prepare("DROP TABLE society").run();
db.prepare("DROP TABLE comments").run()
*/
/*
// représente les utilisateurs
db.prepare(`CREATE TABLE users(
    id integer primary key,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL, 
    isJournalist boolean NOT NULL default FALSE, 
    society INTEGER(11) DEFAULT NULL, 
    password VARCHAR(255) NOT NULL, 
    isAdmin boolean NOT NULL default 0
    )`).run();

// représente les articles
db.prepare(`CREATE TABLE articles(
    id integer primary key,
    authorId integer(11) NOT NULL,
    title VARCHAR(255) NOT NULL, 
    content TEXT(2000) NOT NULL,
    FOREIGN KEY(authorId) REFERENCES users(id)
)`).run();

// représente les sociétés
db.prepare(`CREATE TABLE society(
    id integer primary key,
    ownerId integer(11) NOT NULL,
    name VARCHAR(20) NOT NULL, 
    description VARCHAR(255) NOT NULL,
    icon: VARCHAR(255) NOT NULL,
    FOREIGN KEY(ownerId) REFERENCES users(id)
)`).run();

// représente les commentaires des articles
db.prepare(`CREATE TABLE comments(
    id integer primary key,
    authorId integer(11) NOT NULL,
    articleId integer(11) NOT NULL,
    text TEXT(500) NOT NULL,
    FOREIGN KEY(authorId) REFERENCES users(id),
    FOREIGN KEY(articleId) REFERENCES articles(id)
)`).run();

// représente les technologies
db.prepare(`CREATE TABLE solutions(
    id integer primary key,
    societyOwnerId integer(11) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT(500) NOT NULL,
    FOREIGN KEY(societyOwnerId) REFERENCES society(id)
)`).run();
*/

module.exports = {
    articles: articleMethods,
    users: userMethods,
    society: societyMethods,
    comments: commentMethods
}