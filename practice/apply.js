// The apply() method is literally the same as call() method.
// They just both take arguments differently.

var person1 = {
  name: "susheel",
};

var person2 = {
  name: "pillu",
};

function myName(age, city) {
  this.age = age;
  this.city = city;
}

myName.apply(person1, [22, "bhopal"]);


console.log(person1);