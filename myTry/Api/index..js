const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

/*
* route.post ('/',async (req,res) => {
*     const {firstName, lastName} = req.body;
*     let user = {};
*     user.firstName = firstName;
*     user.lastName = lastName;
*     let userModel = new User(user);
*     await userModel.save();
*     res.json(userModel);
* });
*/
route.get('/', (req,res) => {
    console.log('Using get..');
    // res.send('I did it on my own!');
    // const sendJSON = {
    //     name: 'Aditya',
    //     age: 24,
    //     cool: true
    //     };
          
    //     res.json(sendJSON);
    // res.render('hello');
    res.render('hellolayout');

});

module.exports = route ;