// Function Declarations vs. Expressions
// function percentageOfWorld1(population) {
//   return (population / 8000) * 100;
// }

// const china = percentageOfWorld1(1141);
// console.log(china);

// const russia = percentageOfWorld1(127);
// console.log(russia);

// const kyrgyzstan = percentageOfWorld1(8);
// console.log(kyrgyzstan);

// const percentageOfWorld2 = (population) => (population / 8000) * 100;

// const china = percentageOfWorld2(1141);
// console.log(china);

// const russia = percentageOfWorld2(127);
// console.log(russia);

// const kyrgyzstan = percentageOfWorld2(8);
// console.log(kyrgyzstan);

// const population = [1141, 127, 8];
// percentages2 = [];

// for (let index = 0; index < population.length; index++) {
//   percentages2.push(percentageOfWorld1(population[index]));
// }
// console.log(percentages2);

// Basic Array Operations (Methods)

// let neighbours = ["ireland", "france", "Germany"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop("Utopia");
// console.log(neighbours);
// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central european country");
// }
// neighbours[neighbours.indexOf("ireland")] = "Ireland";
// console.log(neighbours);

// Introduction to Objects

// const myCountry = {
//   country: "UK",
//   capital: "London",
//   language: "English",
//   population: 69,
//   neighbours: ["Ireland", "France"],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },
//   checkIsland:
// };

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );
// myCountry.population += 2;
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );
// myCountry["population"] -= 2;
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );
// myCountry.describe();

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// } else {
//   console.log(john.bmi, mark.bmi);
// }

// Looping Backwards and Loops in Loops

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let i2 = 0; i2 < listOfNeighbours[i].length; i2++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][i2]}`);
//   }
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
function calcAverage(arr) {
  sum = arr.reduce((sum, current) => sum + current);
  return sum / arr.length;
}
console.log(tips, totals);
console.log(calcAverage(totals));

console.log();
