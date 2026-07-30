# JavaScript `map()` Examples

## Example 1: Replace Every Value

```javascript
const a = [1, 2, 3];
const b = a.map(() => 5);
console.log(b);
// [5, 5, 5]
```

## Example 2: Copy an Array

```javascript
const a = [1, 2, 3];
const b = a.map(item => item);
console.log(b);
// [1, 2, 3]
```

## Example 3: Multiply Values

```javascript
const a = [1, 2, 3];
const b = a.map(item => item * 4);
console.log(b);
// [4, 8, 12]
```

## Example 4: Add 10 to Every Number

```javascript
const numbers = [5, 10, 15];
const updated = numbers.map(number => number + 10);
console.log(updated);
// [15, 20, 25]
```

## Example 5: Convert Numbers to Strings

```javascript
const numbers = [1, 2, 3];
const strings = numbers.map(number => `Number: ${number}`);
console.log(strings);
```

## Example 6: Square Each Number

```javascript
const numbers = [2, 4, 6, 8];
const squares = numbers.map(number => number ** 2);
console.log(squares);
// [4, 16, 36, 64]
```

## Example 7: Access the Index

```javascript
const fruits = ["Apple", "Banana", "Orange"];

const result = fruits.map((fruit, index) =>
    `${index}: ${fruit}`
);

console.log(result);
```

## Example 8: Create HTML Elements

```javascript
const fruits = ["Apple", "Banana", "Orange"];

const html = fruits.map(
    fruit => `<li>${fruit}</li>`
);

console.log(html);
```

## Example 9: Map Objects

```javascript
const students = [
    { name: "John", mark: 75 },
    { name: "Sarah", mark: 90 },
    { name: "Tom", mark: 82 }
];

const names = students.map(student => student.name);
console.log(names);
```

## Example 10: Transform Objects

```javascript
const students = [
    { name: "John", mark: 75 },
    { name: "Sarah", mark: 90 }
];

const updated = students.map(student => ({
    ...student,
    passed: student.mark >= 50
}));

console.log(updated);
```

## Example 11: Convert Temperatures

```javascript
const celsius = [0, 10, 20, 30];

const fahrenheit = celsius.map(
    temp => temp * 9 / 5 + 32
);

console.log(fahrenheit);
```

## Example 12: Using All Three Parameters

```javascript
const numbers = [10, 20, 30];

const result = numbers.map((item, index, array) => {
    console.log(array);
    return item + index;
});

console.log(result);
```

### Parameters Available

```javascript
(item, index, array)
```

- item → current value
- index → current position
- array → original array

## Example 13: Create a Numbered Menu

```javascript
const menu = [
    "Home",
    "Products",
    "Contact"
];

const numberedMenu = menu.map(
    (item, index) => `${index + 1}. ${item}`
);

console.log(numberedMenu);
```

## Example 14: Build Objects for UI Components

```javascript
const products = [
    "Keyboard",
    "Mouse",
    "Monitor"
];

const cards = products.map(product => ({
    title: product,
    inStock: true
}));

console.log(cards);
```

## Rule of Thumb

```text
map() takes an array,
runs a function on every element,
and returns a NEW array of the same length.
```

```javascript
const newArray = oldArray.map(item => {
    return transformedItem;
});
```
