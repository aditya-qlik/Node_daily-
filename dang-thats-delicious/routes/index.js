const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  console.log('hey this is first change ');
  res.send('Hey! It is working!!!!');
});

module.exports = router;
