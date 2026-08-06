// Challenge 1 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Use the pop() method to remove the last element from the array
let newNumbers = [...numbers];
newNumbers.pop();
console.log(newNumbers);
// Use the unshift() method to add the last element to the beginning of the array
newNumbers.unshift(5);
console.log(newNumbers);
// Use the slice() method to exclude the first 3 elements and return a new array
const thirdNumbers = newNumbers.slice(3);
console.log(thirdNumbers);
// Set the value of the outputfield inner html to the new array
document.getElementById("OutputField").textContent = thirdNumbers;
