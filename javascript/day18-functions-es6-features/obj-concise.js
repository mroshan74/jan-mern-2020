//es5
var name = 'arjun', city = 'mysore'
var person = {
    name : name,
    city : city
}

console.log(person)

//es6 - // concise properties - shorthand properties
// when property name is same as variable name, use only the variable name
const firstName = 'john', lastName = 'mark'
const user = {
    firstName,
    lastName
}

console.log(user)

// es5

var student = {
    name : 'mahesh',
    details : function(){
        return 'name is '+ this.name
    }
}

// es6 -concise methods
const emp = {
    name: 'akshay',
    details(){  // <- example of concise property
        return `emp name is ${this.name}`
    }
}

console.log(emp.details())