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