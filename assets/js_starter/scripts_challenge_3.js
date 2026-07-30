// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Check if the array includes the number 5
numbers.includes(5);
// If true, filter out numbers less than 5
const fliteredNumber = numbers.filter((number) => number < 5);
console.log(fliteredNumber);
// Then square each number in the resulting array

let squaredNumbers = fliteredNumber.map((number) => number * number);
console.log(squaredNumbers);
// Output the final array
document.getElementById("OutputField").textContent = squaredNumbers;
// Output a message if the number 5 is not in the array
