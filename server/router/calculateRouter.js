const express = require('express');
const router = express.Router();
const calculateModule = require('../modules/calculateModule');
let inputs;
router.post('/', function(request, response){
  inputs = request.body;
  let calculatedNumber = calculateModule(inputs);
  console.log('calculation', calculatedNumber);
  response.sendStatus(200);
})

router.get('/get', function(request, response){
  let calculation = calculateModule(inputs);
  console.log(calculation);
  response.send({calc: calculation});
})


module.exports = router;
