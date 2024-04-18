function animal(noOfLegs, vegetarian) {
  let obj = {};

  obj.noOfLegs = noOfLegs;
  obj.vegetarian = vegetarian;

  obj.eat = function () {
    console.log("eating...");
  };

  obj.greet = function () {
    console.log(`Hi, I have ${obj.noOfLegs} legs.`);
  };

  return obj;
}

// example invocation
let a1 = animal(4, true);
console.log(a1);
a1.eat(); // eating...
a1.greet(); // Hi, I have 4 legs.
