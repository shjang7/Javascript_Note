https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/
# Regular Expressions
### Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

### Match Literal Strings
##### case sensitive
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
