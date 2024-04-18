var person1 = {
  name: "John",
};

var person2 = {
  name: "Jill",
};

function myName(age) {
  this.age = age;
}
myName.call(person1, 28);

console.log();
