/*
create an object to specify data of customer in a bank. The data to be stored is :
Account Number
Name
Balance

create a method called as transaction which take 2 args amount and code ( 1 for deposit, 0 for withdraw )
create a method to display the current balance for the customer
If the withdraw amount is more than the balance then display " The balance is insufficient for the specified withdrawal"
 */

 const customer = {
     accountNumber:1 ,
     name:'Muhammed' ,
     balance:75000,
     transaction : function(getAmount,code){
         if(code==1){  // deposit
             this.balance+=getAmount
             return this.balance
         }
         else if(code == 0){ // withdraw
            if(getAmount>this.balance){
                return "The balance is insufficient for the specified withdrawal";
            }
            else{
                this.balance-=getAmount
                return this.balance
            }
        }
        else
            return "invalid input"
    },
    display:function(){
        return this.balance
    }
 }
 
 console.log(customer.transaction(15000,1))
 console.log(customer.display())
 console.log(customer.transaction(95000,0))
 console.log(customer.transaction(35000, 0))
 console.log(customer.display())
