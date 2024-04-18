// problem - create animal using constructor function

function Animal(noOfLegs, vegetarian) {
  this.noOfLegs = noOfLegs;
  this.vegetarian = vegetarian;

  this.eat = function() {
    console.log('eating...')
  }

  this.greet = function() {
    console.log(`Hi, I have ${this.noOfLegs} legs.`)
  }
}

// example invocation
let a1 = new Animal(4,true);
console.log(a1)
a1.eat() // eating...
a1.greet() // Hi, I have 4 legs.