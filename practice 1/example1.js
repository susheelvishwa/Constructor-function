// Related functions can be a part of the object itself, so wherever we have this object we have access to its functions (methods). In other words, Objects can store functions with their associated data.

let account = {
  name: "Susheel",
  accountNumber: 9630791492,
  type: "Preffered Savings",
  balance: 100000,
  active: true,
  printAccountDetails: function () {
    console.log(
      "Name: ",
      this.name,
      "Type: ",
      this.type,
      "Active: ",
      this.active,
      "Bal: ",
      this.balance
    );
  },
};

account.printAccountDetails();