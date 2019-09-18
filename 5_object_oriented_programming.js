# [Object Oriented Programming](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/)
### Create a Basic JavaScript Object
let dog = {
  name: "Momo",
  numLegs: 4
};

### Use Dot Notation to Access the Properties of an Object
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog.name);
console.log(dog.numLegs);

### Create a Method on an Object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() { return "This dog has " + dog.numLegs + " legs."; }
};

dog.sayLegs();

### Make Code More Reusable with the this Keyword
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

### Define a Constructor Function
function Dog() {
  this.name = "Alberto";
  this.color = "red";
  this.numLegs = 4;
}

### Use a Constructor to Create Objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();

### Extend Constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Ben", "gray");

### Verify an Object's Constructor with instanceof
/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(3);

myHouse instanceof House;


### Understand Own Properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

### Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}


Dog.prototype.numLegs = 4;
// Add your code above this line
let beagle = new Dog("Snoopy");

### Iterate Over All Properties
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line
for(let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

### Understand the Constructor Property
##### Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  }
  return false;
}

### Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

### Remember to Set the Constructor Property when Changing the Prototype
##### There is one crucial side effect of manually setting the prototype to a new object. It erased the constructor property!
function Dog(name) {
  this.name = name;
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

### Understand Where an Object’s Prototype Comes From
##### duck inherits its prototype from the Bird constructor function.
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);

### Understand the Prototype Chain
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

### Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

### Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"

### Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"

### Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();

### Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function() {
    console.log("Woof!");
}
Dog.prototype.constructor = Dog;

// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

### Override Inherited Methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."}

// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

### Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Flying, wooosh!");
    }
}
glideMixin(bird);
glideMixin(boat);

### Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  }
}

let kiwi = new Bird();
console.log(kiwi.getWeight());

### Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("A cozy nest is ready");
})();

### Use an IIFE to Create a Module
let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
