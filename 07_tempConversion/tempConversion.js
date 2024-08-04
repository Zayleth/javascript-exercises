const convertToCelsius = function(fahrenheit) {
  return (Math.round(((fahrenheit - 32) * 5 / 9) * 10) / 10);
};

const convertToFahrenheit = function(celsius) {
  return (Math.round((celsius * 9 / 5 + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


/*

ANOTHER OPTION:
The toFixed() method returns a string "", not a number.
We have to add the parseFloat method to convert the string into a number.

From Fahrenheit to Celsius:
  const result_celcius = (fahrenheit - 32) * 5 / 9;
  return parseFloat(result_celcius.toFixed(1));

From Celsius to Fahrenheit:
  const result_fahrenheit = (celcius * 9 / 5 + 32);
  return parseFloat(result_fahrenheit.toFixed(1));

*/
