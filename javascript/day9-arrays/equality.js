// = assignment
// == equality (boolean) compares only the values, not the data types
// === strict equality (boolean) compares the data types first, if true then compares the values next

console.log('10' == 10) // true
console.log('10' == 20) // false

console.log("10" === 10) //false
console.log(10 === 10) // true
console.log("10" === '20') // false
console.log(parseInt('10') === 10) // true
