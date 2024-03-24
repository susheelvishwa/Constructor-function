function Employee(name, position, salary) {
    this.name = name
    this.position = position
    this.salary = salary
}

const persion1 = new Employee("susheel", "SDE-1", 600000)
const persion2 = new Employee("chomu", "SDE-2", 10000000)

Employee.call(persion1, "pillu", "SDE-3", 20000000)

console.log(persion1, persion2);