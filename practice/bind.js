// You can bind a particular object as ‘this’ to a function and use it later.
// You cannot use call() or apply() later, they run immediately.

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

// let myBindFunc = myName.bind(person1, 22, "bhopal");
// myBindFunc(person2);


console.log(person1);