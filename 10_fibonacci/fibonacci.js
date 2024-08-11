const fibonacci = function(number) {

    if (number < 0) {
        return "OOPS";

    } else if (number === 0) {
        return 0;

    } else {
        let fib_array = [0, 1];

        for (let i = 2; i <= number; i++) {
            fib_number = fib_array[i-1] + fib_array[i-2];
            fib_array.push(fib_number);
        }
        return fib_array[number];
    }
};

// Do not edit below this line
module.exports = fibonacci;


/*
Fn = Fn-1 + Fn-2
WHILE
n ≥ 2.

[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025]
*/