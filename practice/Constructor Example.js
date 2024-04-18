function student(n, t) {
  this.name = n; // this refers to the parent object;
  this.education = t;
}

var student1 = new student("susheel", "B.tech");
var student2 = new student("mithlesh", "MBA");


console.log(student2);