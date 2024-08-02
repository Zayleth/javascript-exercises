const sumAll = function(first_num, second_num) {
    
    let sum = 0;

    if (!Number.isInteger(first_num) || !Number.isInteger(second_num)) return "ERROR";
    
    if (first_num < 0 || second_num < 0) return "ERROR";
    
    // Number.isInteger(first_num): check if first_num is an integer (has no decimal part).

    let min = Math.min(first_num, second_num);
    let max = Math.max(first_num, second_num);

    let rango = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
    let result = rango(min, max);

    if (first_num > second_num) result.reverse();

    // Example - Output: [5, 6, 7, 8, 9, 10]
    // Reversed - Output: [10, 9, 8, 7, 6, 5]

    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;


// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

// Ex -
// sumAll(1, 4) -> returns the sum of 1 + 2 + 3 + 4 which is 10
