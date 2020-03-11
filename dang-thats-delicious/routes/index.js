const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')
// Do work here
/*
* router.get('/', (req, res) => {
*  console.log('hey!!! connection established');
*  // const sendJSON = {
*  //   name: 'Aditya',
*  //   age: 24,
*  //   cool: true
*  // };
*  // res.send('Hey! It is working!');
*  // res.json(sendJSON);
*  // res.send(req.query.age);
*  // res.send(req.query);
*  res.render('hello')
* });

* router.get('/reverse/:name/:age/:cool', (req,res) => {
*  // res.send('new router working');
*  console.log('new router working');
*  const reverse = [...req.params.name].reverse().join('');
* res.send(`reverse of name: ${reverse}, age: ${req.params.age}, cool: ${req.params.cool}`);
* })

* router.get('/enterParamsHere/:name/:age/:place', (req,res) => {
*   const userName = req.params.name;
*   const age = req.params.age;
*   const place = req.params.place;
  
*   res.render('inputFromParams', {
*     name: userName,
*     age: age,
*     place: place
*   });
*   // res.render('inputFromParams', {
*   //   name: req.params.name,
*   //   age: req.params.age,
*   //   place: req.params.place
*   // });
* })


* router.get('/', (req, res) => {
*
*  res.render('inputFromQuery',{
*    name: req.query.name,
*    age: req.query.age,
*    dog: req.query.dog
*  });
* });
*/
const {catchErrors} = require('../handlers/errorHandlers')
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
// router.get('/', storeController.myMiddleware);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
router.post('/add/:id', catchErrors(storeController.updateStore));
router.get('/stores/:id/edit', catchErrors(storeController.editStores));
module.exports = router;
