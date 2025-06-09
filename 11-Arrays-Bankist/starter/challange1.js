// Working With Arrays
// Coding Challenge #1

// const JuliaData = [3, 5, 2, 12, 7];
// const KateData = [4, 1, 15, 8, 3];
const JuliaData = [9, 16, 6, 8, 3];
const KateData = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  //   const dogsJuliaCopy = [...dogsJulia].slice(1, -2);
  const dogsJuliaCopy = dogsJulia.slice();
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice();
  const concatArrays = dogsJuliaCopy.concat(dogsKate);
  concatArrays.forEach((dogAge, i) => {
    age = dogAge >= 3 ? 'adult' : 'puppy';
    console.log(`Dog number ${i + 1} is an ${age}, and is ${dogAge} years old`);
  });
};
checkDogs(JuliaData, KateData);
