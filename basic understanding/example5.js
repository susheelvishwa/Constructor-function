// Create multiple BankAccount objects representing different accounts.

let p1 = new BankAccount(1,"susheel","saving",500)
let p2 = new BankAccount(2,"sonu","saving",1000)
let p3 = new BankAccount(3,"shivam","saving",1500)
console.log(p1,p2,p3)

// Perform a series of deposit, withdrawal, and balance check operations on these accounts.

console.log(p1)

p1.deposit(500)
console.log(p1)

/p1.withdraw(600)
p1.withdraw(500000000)
console.log(p1)

p1.checkbalnce()
console.log(p1)

p1.isActive()
console.log(p1)
