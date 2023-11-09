const findTheOldest = function(people) {
  const sortedPeople = people.sort((a, b) => {
    for (i of [a, b]) {
      if (!("yearOfDeath" in i)) {
        i.yearOfDeath = new Date().getFullYear();
      }
    }
    ageA = a.yearOfDeath - a.yearOfBirth;
    ageB = b.yearOfDeath - b.yearOfBirth;
    return ageA > ageB ? -1 : 1;
  });
  return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
