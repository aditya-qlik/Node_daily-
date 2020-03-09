const express = require('express');
const connectDB = require('./DB/connection');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const route = require('./Api/index');
const flash = require('connect-flash');
const helpers = require('./helpers');
app.use('/', route);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug');
connectDB();
// app.use(session({
//     secret: process.env.SECRET,
//     key: process.env.KEY,
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({
//         mongooseConnection: mongoose.connection
//     })
// }));
app.use(express.json({extended: false}));
// app.use(flash());
app.use((req, res, next) => {
    res.locals.h = helpers;
    // res.locals.flashes = req.flash();
    // res.locals.user = req.user || null;
    res.locals.currentPath = req.path;
    next();
});
app.use('/api/userModel', require('./Api/index'));
const port = process.env.Port || 8080;

app.listen(port, () => console.log('Server started'));
app.set(port, process.env.PORT || 8080);

module.exports = app;
