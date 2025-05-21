'use strict';
// using arrow functions in place of returning function

// const greet = d => console.log(d);
// const greet = greeting => username => console.log(`${greeting} ${username}`);

// const greetHey = greet('hey');
// greetHey('steve');
// greet('hey')('ddd');

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVat = addTaxRate(0.23);

// console.log(addVat(200));

// challange 1

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     if (answer >= 0 && answer <= 3 && answer % 1 == 0) {
//       this.answers[answer] += 1;
//     } else {
//       alert('Enter a valid number');
//     }
//     this.displayResults('array');
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type == 'array') {
//       console.log(this.answers);
//     } else if (type == 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// // [5, 2, 3]
// // [1, 5, 3, 9, 6, 1]

// Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document
    .querySelector('body')
    .addEventListener('click', () => (header.style.color = 'blue'));
})();
