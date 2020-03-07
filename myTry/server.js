const express = require('express');
const connectDB = require('./DB/connection');
const app = express();


connectDB();
app.use(express.json({extended: false}));
app.use('/api/userModel', require('./Api/user'));
const port = process.env.Port || 7777;

app.listen(port, () => console.log('Server started'));