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

route.get('/enterParamsHere/:name/:age/:place', (req, res) => {
    const userName = req.params.name;
    const age = req.params.age;
    const place = req.params.place;

    res.render('inputFromParams', {
        name: userName,
        age: age,
        place: place
    });
    // res.render('inputFromParams', {
    //   name: req.params.name,
    //   age: req.params.age,
    //   place: req.params.place
    // });
})
module.exports = route ;