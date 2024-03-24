// let see constructor function

// it is used to create dynamic object

function studentData(name, enrollment_number, section, passing_year) {
  
  this.name = name;
  this.enrollment_number = enrollment_number;
  this.section = section;
  this.passing_year = passing_year;

}

let student1 = new studentData("pillu", 119, "B", 2024);
let student2 = new studentData("chomu", 204, "A", 331);

console.log(student1, student2);