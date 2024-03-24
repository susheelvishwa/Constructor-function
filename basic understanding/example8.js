// let see constructor function

// it is used to create dynamic object

function StudentData(name, enrollment_number, section, passing_year) {
  
  this.name = name;
  this.enrollment_number = enrollment_number;
  this.section = section;
  this.passing_year = passing_year;

}

let student1 = new StudentData("pillu", 119, "B", 2024);
let student2 = new StudentData("chomu", 204, "A", 331);

console.log(student1, student2);