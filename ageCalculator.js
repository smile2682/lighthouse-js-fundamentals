const ageCalculator = (firstName, yearOfBirth, currentYear) => {
  let age = currentYear - yearOfBirth;
  return `${firstName} is ${age} years old.`;
};
ageCalculator();
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
