const leapYears = function(year) {

    const divisibleBy4 = year % 4 === 0;
    const divisibleBy100 = year % 100 === 0;
    const divisibleBy400 = year % 400 === 0;

    if (divisibleBy4 && !divisibleBy100) {
        return true;

    } else if (divisibleBy100 && divisibleBy400) {
        return true;

    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;

// PARAMETER -> year

/* General conditions to know if a year is a leap year

- Divisible by 4, but not divisible by 100 = LEAP YEAR -> TRUE
- Divisible by 100 and divisible by 400 = LEAP YEAR -> TRUE 
- ELSE = NO LEAP YEAR -> FALSE

*/