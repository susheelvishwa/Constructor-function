// call() provides a new value of ‘this’ to the function/method.

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
myName.call(person1, 22, "bhopal");
myName.call(person2, 21, "pune");

console.log(person1);
console.log(person2);
