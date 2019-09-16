# [ES6 update info](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/)
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

### Set Default Parameters for Your Functions
##### to apply map(), filter() and reduce()
const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

### Rest Operator
##### to apply map(), filter() and reduce()
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

### Spread Operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);

### Destructuring Assignment
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const {tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

### Destructuring Assignment
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const { tomorrow: { max: maxOfTomorrow } } = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

### Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
(() => {
  "use strict";
  [b,a]=[a,b];
})();
console.log(a); // should be 6
console.log(b); // should be 8

### Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
##### same logic: Array.prototype.slice()
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [,,...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

### Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return (({max, min}) => {
    // use function argument destructuring
    return (max + min) / 2.0;
  });
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

### Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  const resultDisplayArray = arr.map(element=>`<li class="text-warning">${element}</li>`);

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

### Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

### Write Concise Declarative Functions with ES6
// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

### Use class Syntax to Define a Constructor Function
function makeClass() {
  "use strict";
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

### Use getters and setters to Control Access to an Object
function makeClass() {
  "use strict";
  class Thermostat{
    constructor(fahrenheit){
      this._fahrenheit = fahrenheit;
    }
    get temperature() {
      return this._celsius = 5 / 9 * (this._fahrenheit - 32);
    }
    set temperature(celsius) {
      this._fahrenheit = celsius * 9.0 / 5 + 32;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

### Understand the Differences Between import and require
"use strict";
import { capitalizeString } from "string_functions";
capitalizeString("hello!");

### Use export to Reuse a Code Block
"use strict";
export const foo = "bar";
export const bar = "foo";

### Use * to Import Everything from a File
"use strict";
import * as str from "capitalize_strings";

### Create an Export Fallback with export default
##### Note: Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const
"use strict";
export default function subtract(x,y) {return x - y;}

### Import a Default Export
"use strict";
import subtract from "math_functions";
subtract(7,4);
