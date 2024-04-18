// grouping related variables
let account = {
  accountNumber : 9630791492,
  name: 'susheel',
  type: 'Simple Saving',
  balance: 100000,
  active: true,
}


account.reference = "Some one";
account["mitra"] = "shivam";
// console.log(account);

delete account.reference;
console.log(account);
