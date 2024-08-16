const add = (a, b) => { 
  return a + b	
};

const subtract = (a, b) => {
	return a - b
};

const sum = (array) => {
	return array.reduce((total, item) => total + item, 0)
};

const multiply = (array) => {
  return array.reduce((total, item) => total * item, 1)
};

const power = (a,b) => {
  return a ** b;	
};

const factorial = (a) => {
  let result = 1
  for(let i = 1; i <= a; i++){
    result = result * i
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
