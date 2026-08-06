// Challenge 2 Starter
// Initialise the arrays
let array1 = [1, 2, 3, 2];
let array2 = [4, 5, 6, 4];

// Use the spread operator to merge the two arrays
const arrayMerged = [...array1, ...array2];
// console.log(arrayMerged);
// Use the Set object to remove duplicates
const arraySorted = [...new Set(arrayMerged)];
console.log(arraySorted);
// Use array destructuring to assign the first three elements to variables
const [first, second, third, fourth, fifth, sixth] = arraySorted;
// Set the value of the output filed to be the second element of the unique array
document.getElementById("OutputField").textContent = arraySorted;
