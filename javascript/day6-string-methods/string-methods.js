const str = 'javascript'


console.log(str.length) // 10

console.log(str.toUpperCase())  // JAVASCRIPT
console.log(str.toLowerCase())  // javascript

console.log(str.indexOf('a'))  // 1          
// indexOf -> scans from left to right
console.log(str.indexOf('z'))  // -1

console.log(str.includes('a'))  // true
console.log(str.includes('z')) // false

console.log(str.indexOf('a') >= 0) // true
console.log(str.lastIndexOf('a'))  // 3
// lastIndexOf -> scans from right to left

console.log(str[1]) // a
console.log(str.charAt(1)) // a

const name = 'sachin'

console.log(name.slice(0,3)) // 'sac'
// slice 2 argument -> 0 to 2 is returned not including the third index
console.log(name)  

console.log(name.slice(1)) // 'achin'
// slice single argument -> return string from the index 1 to end of the string

// there is no methods to capitalize a string in javaScript
// to capitalize
console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())  // Sachin

//split
let tech = 'javascript react node express'
console.log(tech.split(' '))
console.log(tech.split('a'))

const students = 'arjun-mahi-mahesh'
console.log(students.split('-'))
console.log(students.split(''))

const emails = '1@gmail.com,2@gmail.com,3@gmail.com'
console.log(emails.split(",")) // [ '1@gmail.com', '2@gmail.com', '3@gmail.com' ]

console.log(tech.split())