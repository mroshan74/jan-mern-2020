// to store values inside a program
var city
console.log(city) //undefined

let state
console.log(state) //undefined

//SyntaxError: Missing initializer in const declaration
// const location

state = 'karnataka'
console.log(state) // 'karnataka'

const price = 25
const temp = 45.22

console.log(price, temp)  // 25 45.22

console.log(typeof(city)) // 'undefined'
console.log(typeof (state)) // 'undefined'
console.log(typeof (price)) // 'number'
console.log(typeof (temp)) // 'number'

console.log(typeof typeof price) // 'string'

const fruits = ['mango','orange','apple']
console.log(fruits)  // ['mango', 'orange' , 'apple']

console.log(typeof fruits) // 'object'

const person = {
    name: 'muhammed',
    city: 'kozhikode'
}

console.log(person)
console.log(typeof person) // 'object'

console.log(Array.isArray(fruits)) // true
console.log(Array.isArray(person)) //false

const allowAccess = true
console.log(typeof allowAccess) // 'boolean'

const details = function() {
     return ' hi there'
}

console.log(details) // [function: details]
console.log(details()) // 'hi there'
console.log(typeof details()) // 'string'

