"use strict";

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const mixJuice = fruitProcessor(10, 5);
console.log(mixJuice);

// or

console.log(fruitProcessor(5, 3));

// Function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991); //variable after the function

// or

const age = calcAge1(1991); // variable goes first before function

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

// arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const ageA = 2037 - birthYear;
//   const retirement = 65 - ageA;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Him"));

// function calling other function

function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// reviewing function

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const ageA = calcAge(birthYear);
//   const retirement = 65 - ageA;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     return -1;
//     console.log(`${firstName} has already retired`); // after return immmediately exit the function so console.log will be ignored
//   }
// };

// console.log(yearsUntilRetirement(1991, "Him"));
// console.log(yearsUntilRetirement(1950, "Her"));

// ARRAY

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// const years = [1990, 1967, 2002, 2010, 2018];

// const age4 = calcAge(years[0]);
// const age5 = calcAge(years[years.length - 1]);
// console.log(age4, age5);

// const ages = [calcAge(years[0]), calcAge(years[years.length - 1])];
// console.log(ages);

// // add elements to array

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // remove elements from array

// const popped = friends.pop(); //last element
// console.log(popped);

// friends.shift(); //first element
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// console.log(friends.includes("Steven")); //returns boolean if there is or isn't in the array
// console.log(friends.includes("Bob"));

// OBJECT

// const jonas = {
//   firstName: "him",
//   lastName: "her",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["LastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // console.log(jonas.'last' + nameKey);

// // const interestedIn = prompt(
// //   "What do you want to know about him? Choose between firstName, LastName, age, job, and friends"
// // );

// // if (jonas[interestedIn]) {
// //   console.log(jonas[interestedIn]);
// // } else {
// //   console.log(
// //     "wrong request! Choose between firstName, LastName, age, job, and friends"
// //   );
// // }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jjjjj";
// console.log(jonas);

// // quick challenge
// //"'him' has '3' friends, and his best is called 'Michael'"

// const sentence = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;

// console.log(sentence);

const jonas = {
  firstName: "he",
  lastName: "she",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function (birthYear) {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function (birthYear) {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function (hasDriverLicense) {
    this.driverLicense = this.hasDriverLicense;
    if (this.driverLicense) {
      return "a";
    } else {
      return "no";
    }
  },
};

console.log(jonas.calcAge());
console.log(jonas.getSummary());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas["calcAge"](1991));

//challenge
//'He is a 46 years old teacher, and he has a/no driver's license'

const sentence = `${jonas.firstName} is a ${
  jonas.age
} old teacher, and he has ${jonas.getSummary()} driver's license`;

console.log(sentence);

// LOOP

const jonasArray = [
  "him",
  "her",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);

  // types[i] = typeof jonasArray[i];

  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// break and continue
console.log("--ONLY STRINGS--");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray !== "string") continue;

  console.log(jonasArray[i]), typeof jonasArray[i];
}

console.log("--BREAK WITH NUMBER--");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray === "number") break;

  console.log(jonasArray[i]), typeof jonasArray[i];
}

const jonasArrays = [
  "him",
  "her",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonasArrays.length - 1; i >= 0; i--) {
  console.log(i, jonasArrays[i]);
}

// loop inside loop

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--- starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

// WHILE LOOP

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
