// Person
// property - firstName, lastName
//method - fullName


//constructor function
function Person(fName, lName, c){
    // assigning initial values to property
    this.firstName = fName
    this.lastName = lName
    this.country = c

    this.fullName = function(){
        return `${this.firstName} ${this.lastName} - (${this.country.toUpperCase()})`
    }
}

const p1 = new Person('muhammed','roshan','india')
console.log(p1.fullName())