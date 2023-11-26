const removeFromArray = function(array, ...argumentsToRemove) {
    let newArray = array.filter(item => !argumentsToRemove.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
