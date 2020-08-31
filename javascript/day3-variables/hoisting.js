// var - hoisting
console.log(city) // undefined
var city = 'bangalore'
console.log(city) // 'bangalore'

// let - do not get hoisted
// ReferenceError: source is not found
// console.log(source)

let source = 'mysore'
console.log(source) // 'mysore'

// const- do not get hoisted
// ReferenceError: destination not defined
// console.log(source)

const destination = 'bangalore'
console.log(destination) // 'bangalore'