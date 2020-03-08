const express = require('express');
const connectDB = require('./DB/connection');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const route = require('./Api/user');
app.use('/', route);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug');
connectDB();
app.use(express.json({extended: false}));
app.use('/api/userModel', require('./Api/user'));
const port = process.env.Port || 7777;

app.listen(port, () => console.log('Server started'));
app.set(port, process.env.PORT || 7777);
