let account = {
  accountNumber: 9630791492,
  name: "susheel",
  type: "Simple Saving",
  balance: 100000,
  active: true,
};

// can be passes to a function as an argument
function printAccountDetails(obj) {
  console.log(
    "Name: ",
    obj.name,
    "Type: ",
    obj.type,
    "Active: ",
    obj.active,
    "Bal: ",
    obj.balance
  );
}

printAccountDetails(account);
