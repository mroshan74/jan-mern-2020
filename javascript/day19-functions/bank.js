/*
create an constructor function to specify data of customer in a bank. The data to be stored is :
Account Number
Name
Balance

create a method called as transaction which take 2 args amount and code ( 1 for deposit, 0 for withdraw )
create a method to display the current balance for the customer
If the withdraw amount is more than the balance then display " The balance is insufficient for the specified withdrawal"
 */

function Customer (name,accNo,initialAmt=0){
  this.accountNumber = accNo,
  this.name = name,
  this.balance = initialAmt,
  this.transaction= function(getAmount, code) {
    if (code == 1) {
      // deposit
      this.balance += getAmount;
      return `balance of ${this.name}(${this.accountNumber}) is ${this.balance}`
    } else if (code == 0) {
      // withdraw
      if (getAmount > this.balance) {
        return `The balance of account ${this.name}(${this.accountNumber}) is insufficient for the specified withdrawal`
      } else {
        this.balance -= getAmount;
        return `balance of ${this.name}(${this.accountNumber}) is ${this.balance}`;
      }
    } else return "invalid input";
  },
  this.display= function() {
    return `balance of ${this.name}(${this.accountNumber}) is ${this.balance}`
  }
}

const c1 = new Customer('roshan',12340001,15000)
const c2 = new Customer('sneha',12340002,10000)
const c3 = new Customer('aravind',12340003,15000)


console.log(c1.transaction(250000,1))
console.log(c2.balance)
console.log(c3.transaction(10000,0))
console.log(c2.transaction(25000,0))
console.log(c2.display())