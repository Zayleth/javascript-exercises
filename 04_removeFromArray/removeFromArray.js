const removeFromArray = function(array, ...theArgs) {
    return array.filter(element => !theArgs.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;


/*
array = array's name
array.filter -> method that creates a new array by filtering the elements of the original array (array) based on a condition
element = (parameter that accepts the filter method) it represents each element of my original array (array)

CONDITION -
!theArgs.includes(element)

explains that -
If the element is not in theArgs, the function returns true and prints the value as is
If the element is in theArgs, the function returns false and removes the value from the array

Ex - 
expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
*/