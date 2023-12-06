const fibonacci = function(providedNumber) {
    let numberA = 0;
    let numberB = 1;
    let sum = 0;
    providedNumber = parseInt(providedNumber)
    if (providedNumber > 0) {
    for (let i = 0; i < providedNumber; i++) {
        sum = numberA + numberB;
        numberA = numberB;
        numberB = sum;
    } return numberA;
} else { 
    return "OOPS"
}};

// Do not edit below this line
module.exports = fibonacci;
