// factory function : The Factory Function is similar to constructor functions/class functions, but instead of using new to create an object, factory functions simply creates an object and returns it.

function data(n, a) {
  let obj = {
    name: n,
    age: a,
  };

  return obj;
}

console.log(data("Susheel", 85));
console.log(data("shivam", 75));
console.log(data("Sonu", 45));
console.log(data("Mansi", 15));
console.log(data("pillu", 5));
