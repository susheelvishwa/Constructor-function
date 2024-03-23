// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.

function BankAccount(ac,n,t,b) {
    this.accountNumber = ac;
    this.name = n;
    this.type = t;
    this.balance = b
}

// Add the following methods to the BankAccount prototype:
// deposit(amount) - Deposits the specified amount into the account.
// withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
// checkBalance() - Prints the account's balance.
// isActive() - Checks and returns whether the account is active.

BankAccount.prototype.deposit = function(value){
    this.balance = this.balance+value
}

BankAccount.prototype.withdraw = function(value) {
    if(this.balance < value){
        console.log("insuficent balance")
    }
    else{
        this.balance = this.balance - value
    }
}

BankAccount.prototype.checkbalnce = function(value){
    console.log(this.balance)
}

BankAccount.prototype.isActive = function(value){
    if(this.balance == 0){
        console.log("not activate")
    }
    else{
        console.log("is active")
    }
}

// Create multiple BankAccount objects representing different accounts.

let p1 = new BankAccount(1,"susheel","saving",500)
let p2 = new BankAccount(2,"sonu","saving",1000)
let p3 = new BankAccount(3,"shivam","saving",1500)
console.log(p1,p2,p3)

// Perform a series of deposit, withdrawal, and balance check operations on these accounts.

// console.log(p1)

// p1.deposit(500)
// console.log(p1)

// p1.withdraw(600)
// p1.withdraw(500000000)
// console.log(p1)

// p1.checkbalnce() 
// console.log(p1)


// p1.isActive()
// console.log(p1)