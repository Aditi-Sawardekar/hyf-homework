console.log("Hello World!");

//Item Array Removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

/* 
Even though its clear that name Ahmad is in the list. 
I am solving this problem as if the array has many elements.
Hence used =
includes()
indexOf()
*/

// Check if the element is in the array
const includesInNames = names.includes(nameToRemove);
console.log(includesInNames);
// true

const indexOfAnElement = names.indexOf(nameToRemove);
console.log(indexOfAnElement); 
//1

// To select Ahmad fron array of students
console.log(names[1]);
// Ahmad

const spliceFromNames = names.splice (indexOfAnElement,1)
//const spliceFromNames = names.splice (1,1)

//names.splice (1,1)
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
