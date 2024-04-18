// var person = { // person is the owner object;
// 	name: 'John',
// }
// console.log(person);


var person = {
  name: "John",
  readName: function () {
    console.log(person.name);
  },
};

person.readName();


// The constructor method in JavaScript is a special function used to create objects.

// - We have to provide a blueprint of what key value pair an object should have.
// To do that, we use functions.