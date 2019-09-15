# [freeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/)
### let keyword
let catName;
let quote;
function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

### let scope
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

### const keyword
function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

### Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // change code above this line
}
editInPlace();

### Prevent Object Mutation
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  // change code below this line


  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

### Use Arrow Functions
const magic = () => new Date()

### Write Arrow Functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5]))

### Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter((num) => Number.isInteger(num) && num > 0).map((num) => num*num);
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions
