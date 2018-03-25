// Section One

const student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

// Q1: List the properties of the Student object
Object.keys(student).forEach(stu => console.log(stu)); // name sclass rollno

// Q2: Get the length of the Student object
console.log(Object.keys(student).length); // 3

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    libraryID: 1254,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    libraryID: 4264,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
    libraryID: 3245,
  },
];

// Q3: Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
for (let i = 0; i < Object.keys(library).length; i++) {
  console.table(library[i]);
}

const sampleArr = [6, 4, 0, 3, -2, 1];

// Q4: Sort the sampleArr from lowest to highest

const sortedArr = sampleArr.sort();
console.log(sortedArr); // [-2, 0, 1, 3, 4, 6]

// Q5: Write a Javascript program to sort the library array of objects by libraryID

const sortLibrary = [...library];
sortLibrary.sort((a, b) => (a.libraryID > b.libraryID ? 1 : b.libraryID > a.libraryID ? -1 : 0));
console.log(sortLibrary);

// Q6: List all the keys and values of each object in the array

for (let i = 0; i < Object.keys(library).length; i++) {
  Object.keys(library[i]).forEach(lib => {
    const key = lib;
    console.log(`${key} : ${library[i][key]}`);
  });
}

// Section Two

// Write a script that outputs every number from 1 (one) to 1,000,000 (one million), but the output should be in words e.g:
// one
// two
// three
//
// one hundred and twelve

// for (let i = 0; i < 1000000 + 1; i += 1) {
//   console.log(numberToWords.toWords(i));
//   (function(i) {
//     setTimeout(() => {
//       console.log(numberToWords.toWords(i));
//     }, 500 + i / 2);
//   })(i);
// }
