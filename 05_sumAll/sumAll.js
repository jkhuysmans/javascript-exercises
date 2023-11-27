//define the first and last integers
//select all integers between those numbers with a loop


const sumAll = function(firstInteger, lastInteger) {
    sum = 0;
     if (typeof firstInteger !== 'number' || typeof lastInteger !== 'number' ||
     firstInteger < 0 || lastInteger < 0) {
        sum = "ERROR";
        return sum;
    } else if (firstInteger > lastInteger) {
        let tempInteger = firstInteger
        firstInteger = lastInteger;
        lastInteger = tempInteger;
    }
    for (let i = firstInteger; i <= lastInteger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
