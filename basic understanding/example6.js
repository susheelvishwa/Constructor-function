// console.log(this);
// everthing in javacript is object

// so this is call
// let frute = {
//   id: 1,
//   frutename: "apple",
// };
// function fruteprinter(color, teste) {
//   this.color = color;
//   this.teste = teste;
//   console.log(this);
// }
// fruteprinter.call(frute, "green", "sour");

// --------------------------------------------------------------------------

// aplply
// let frute2 = {
//   id: 1,
//   frutename: "apple",
// };
// function fruteprinter(color, teste) {
//   this.color = color;
//   this.teste = teste;
//   console.log(this);
// }
// fruteprinter.apply(frute2, ["green", "sour"]);


// ---------------------------------------------------------------------------------

// bind

// let frute2 = {
//   id: 1,
//   frutename: "apple",
// };
// function fruteprinter(color, teste) {
//   this.color = color;
//   this.teste = teste;
//   console.log(this);
// }
// let frutes = fruteprinter.bind(frute2, ["green", "sour"]);
// frutes()
