const add = function(number_1, number_2) {
  return (number_1 + number_2);
};

const subtract = function(number_1, number_2) {
	return (number_1 - number_2);
};

const sum = function(array) {
    const result = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return result;

  /*
  .reduce METHOD
  const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

  or
  const result = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0);
  */
};

const multiply = function(array) {
  const result = array.reduce((accumulator, currentValue) => accumulator * currentValue);
  return result;

  /*

  NORMAL FUNCTION

  const result = array.reduce(function (accumulator, currentValue){
    total_accumulator = accumulator * currentValue;
    return total_accumulator;
  } );

  */
};

const power = function(base_number, exponent_number) {
	return Math.pow(base_number, exponent_number);
};

const factorial = function(number) {
  if (number === 0 || number === 1) return (1);   
  
  for (let i = number - 1; i > 0; i--) {
    number *= i;
  }
  return number;
}

/* EXAMPLE   
number = 3

i = number - 1
i > 0
i--

------
i = 2
2 > 0 TRUE 
number = 3 * 2
number = 6
i = 1

i = 1
1 > 0 TRUE
number = number * i
number = 6 * 1
i = 0

i = 0
0 > 1 FALSE
return number -> 6
*/


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};