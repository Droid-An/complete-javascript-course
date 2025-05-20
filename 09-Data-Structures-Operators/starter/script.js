'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// Data Structures, Modern Operators and Strings

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Destructuring Objects

// // 2.1
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// // 2.2
// const { keywords: tags } = books[0];
// console.log(tags);

// // 2.3
// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// // 2.4
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({ author: bookAuthor, title: bookTitle } = books[0]);
// console.log(bookAuthor, bookTitle);

// // 2.5
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// 2.6
// const printBookInfo = function ({ title, author, year = 'year unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// };
// // printBookInfo({
// //   title: 'Algorithms',
// //   author: 'Robert Sedgewick',
// //   year: '2011',
// // });
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// The Spread Operator
// 3.1
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// // 3.2
// const spellWord = function (string) {
//   console.log(...string);
// };
// console.log(spellWord('string'));

// Rest Pattern and Parameters
// // 4.1
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);
// // 4.2
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher);
// console.log(restOfTheBook);
// 4.3
// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// };
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne', 'd');

// Short Circuiting (&& and ||)
// 5.1
// const hasExamplesInJava = function (book) {
//   console.log(book.programmingLanguage === 'Java' || 'no data available');
// };
// hasExamplesInJava(books[1]);
// 5.2
// for (const book of books) {
//   book.onlineContent && console.log(`${book.title}" provides online content`);
// }

// The Nullish Coalescing Operator (??)
// 6.1
// for (const book of books) {
//   book.onlineContent ??
//     console.log(`${book.title}" provides no data about its online content`);
// }

// Logical Assignments Operators
// 7.1

// for (const book of books) {
//   console.log((book.edition ||= 1));
// }

// 7.2

// for (const book of books) {
//   console.log('before', book.highlighted);
//   book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
//   console.log('after', book.highlighted);
// }

// Looping Arrays: The for-of Loop
// 8.1
// let pageSum = 0;
// for (let book of books) {
//   pageSum += book.pages;
// }
// console.log(pageSum);

// 8.2
// let allAuthors = [];

// for (const book of books) {
//   typeof book.author === 'string'
//     ? allAuthors.push(book.author)
//     : allAuthors.push(...book.author);
// }
// // console.log(allAuthors);
// // 8.3
// // for (const book of books) {
// //   const [index, author] = book.author.entries();
// //   console.log(index, author);
// // }
// for (const author of allAuthors.entries()) {
//   const [index, authorName] = author;
//   console.log(`${index + 1}. ${authorName}`);
// }

// Enhanced Object Literals
// 9.1
