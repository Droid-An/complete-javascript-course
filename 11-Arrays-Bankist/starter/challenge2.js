const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

const data1 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(data1));
