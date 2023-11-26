const reverseString = function(input) {
    let arrayInput = input.split("")
    let reversedInput = arrayInput.reverse();
    let rejoinedInput = reversedInput.join("")
    return rejoinedInput;

};

// Do not edit below this line
module.exports = reverseString;
