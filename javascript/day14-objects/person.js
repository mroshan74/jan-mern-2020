const person = {
    firstName : 'sachin',
    LastName : 'tendulkar',
    fullName : function(){
        return `${this.firstName} ${this.LastName}`
    },
    greet : function(){
        return `my name is ${this.firstName}`
    },
    sayHi : function(getName){
        return `Hi ${getName},my name is ${this.firstName}`;
    }
}
console.log(person.fullName()) // 'sachin tendulkar'
console.log(person.greet()) // 'my name is sachin'
console.log(person.sayHi('mani')) // 'Hi mani,my name is sachin'