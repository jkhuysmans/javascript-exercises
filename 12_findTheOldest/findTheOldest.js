const findTheOldest = function(people) {
    const ordered = people.find((a, b) => a.yearOfBirth > b.yearOfBirth ? 1 : -1)
    console.table(ordered)
};

// Do not edit below this line
module.exports = findTheOldest;
