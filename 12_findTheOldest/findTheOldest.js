const findTheOldest = function(people) {
    let oldestPerson = people[0]; // Start by assuming the first person is the oldest
  
    for (let i = 1; i < people.length; i++) {
      const currentPerson = people[i];
      const currentYear = new Date().getFullYear();
      const ageOfOldest = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;
      const ageOfCurrent = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;
  
      if (ageOfCurrent > ageOfOldest) {
        oldestPerson = currentPerson;
      }
    }
  
    return oldestPerson;
  };

// Do not edit below this line
module.exports = findTheOldest;
