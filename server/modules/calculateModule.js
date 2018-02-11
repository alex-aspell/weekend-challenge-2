function calculateEquation(input){
  console.log('function running');
  if (input.v == '+'){
    return parseInt(input.n1) + parseInt(input.n2);
  }
  else if (input.v == '-'){
    return parseInt(input.n1) - parseInt(input.n2);
  }
  else if (input.v == '*'){
    return parseInt(input.n1) * parseInt(input.n2);
  }
  else {
    return parseInt(input.n1)/parseInt(input.n2);
}

}

module.exports = calculateEquation;
