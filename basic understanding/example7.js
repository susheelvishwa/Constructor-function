// how to create Object

// so normaly we are crating boject

// let student = {
//   name: "susheel",
//   branch: "computer science",
//   passing_year: "2024",
// };

// so normaly this method called as object literal

// what is factory function

// lts See

function studentData(name, enrollment_number, section, passing_year) {

    let obj = {}

    obj.name = name
    obj.enrollment_number = enrollment_number
    obj.section = section
    obj.passing_year = passing_year
    
    return obj
}

let student1 = studentData("pillu", 119, "B", 2024)
let student2 = studentData("chomu", 204, "A", 331)

console.log(student1,student2);