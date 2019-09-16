# [Basic Data Structures](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures)
### Use an Array to Store a Collection of Data
let yourArray = ["orange", 5, true, "lemon", 3]; // change this line

### Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
// change code below this line
myArray[1] = { "lemon": 2 }
//change code above this line
console.log(myArray);

### Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  // change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

### Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped; // change this line
  let shifted; // change this line
  popped = arr.pop();
  shifted = arr.shift();
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

### Remove Items Using splice()
function sumOfTen(arr) {
  // change code below this line
  arr.splice(2,2);
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

### Add Items Using splice()
function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond');
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

### Copy Array Items Using slice()
function forecast(arr) {
  // change code below this line

  return arr.slice(2,4);
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

### Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

### Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());

### Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  // change code below this line
  return arr.indexOf(elem) >= 0;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

### Iterate Through All an Array's Items Using For Loops
##### such as every(), forEach(), map()
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  };
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

### Create complex multi-dimensional arrays
let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array', ['deep']],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
  // change code above this line
];

### Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
// change code above this line

console.log(foods);

### Modify an Object Nested Within an Object
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-object-nested-within-an-object
