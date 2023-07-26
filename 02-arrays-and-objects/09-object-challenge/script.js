// Step 1
const library = [
  {
    title: "Deep Work",
    author: "Nam Le",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: "Think Like A Mont",
    author: "Nguyen Tran",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: "Make Money Fast",
    author: "Cristiano Ronaldo",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
];

// Step 2
for (const element of library) {
  element.status.read = true;
}

// Step 3
const {title: firstBook} = library[0];

// Step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

// // Step 1
// const library = [
//   {
//     title: 'The Road Ahead',
//     author: 'Bill Gates',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: 'Steve Jobs',
//     author: 'Walter Isaacson',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: 'Mockingjay',
//     author: 'Suzanne Collins',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
// ];

// // Step 2
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// // Step 3
// const { title: firstBook } = library[0];

// console.log(firstBook);

// // Step 4
// const libraryJSON = JSON.stringify(library);

// console.log(libraryJSON);
