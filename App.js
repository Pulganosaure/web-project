const express = require("express");
const mustache =require('mustache-express');
const cookieSession = require('cookie-session');

const bodyParser = require("body-parser");

const app = express();

const auth = require("./routes/auth/authentification");

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieSession({secret: 'zi4c9h4323yuif4Ujc'}));
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './views');

app.use('/auth', auth);

app.listen(3000, () => console.log('listening on http://localhost:3000'));

