const express = require("express");
const mustache =require('mustache-express');
const cookieSession = require('cookie-session');

const bodyParser = require("body-parser");

const app = express();
const db = require("./db/database")
//import Routers :
const auth = require("./routes/auth/authentification");
const authForms = require("./routes/auth/forms");
const homePage = require("./routes/homePage/mainPage");
const articleForms = require("./routes/articles/forms");
const articleSubmit = require("./routes/articles/submit");
const articleDisplay = require("./routes/articles/display");

const profile = require("./routes/profile/display");
const profileSubmit = require("./routes/profile/submit")
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieSession({secret: 'zi4c9h4323yuif4Ujc'}));
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './views');

// use routes
app.use('/auth', auth);
app.use('/auth', authForms);
app.use("/", homePage);
app.use('/articles', articleForms)
app.use('/articles', articleSubmit)
app.use('/articles', articleDisplay)
app.use('/profile', profile)
app.use('/profile', profileSubmit)
//redirect route
app.get('*',(req, res) => {
    res.redirect('/');
});

app.listen(3000, () => console.log('listening on http://localhost:3000'));

