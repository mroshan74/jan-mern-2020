// string to number

let n1 = '100', n2 = '115.7', n3 = '88', n4 = 'a'

console.log(typeof n1)  // 'string'
console.log(n1)     // '100'
console.log(n1 + 10)  // '10010'

console.log(parseInt(n1))  // 10
console.log(parseInt(n1) + 10) // 110
console.log(typeof parseInt(n1))  // 'number'

n1 = parseInt(n1)
console.log(typeof n1)  // 'number'
console.log(parseInt(n2)) // 115

console.log(parseFloat(n3)) // 88
console.log(parseFloat(n2)) // 115.7

console.log(Number(n1)) // 100
console.log(Number(n2)) // 115.7

console.log(parseInt(n4)) // NaN

// number - string

const n5 = 25
console.log(String(n5))  // '25'
console.log('' + n5)  // '25'



