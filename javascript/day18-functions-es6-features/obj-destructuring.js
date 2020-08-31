// es5
var person = {
    name: 'rakesh',
    city: 'tumkur'
}

var name = person.name, city = person.city
console.log(name,city)

// es6 - object destructuring

const user = {
    firstName : 'roshan',
    email: 'rosh@gmail.com'
}

const { firstName, email } = user
console.log(firstName, email)