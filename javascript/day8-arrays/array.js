const players = ['sachin','virat','dhoni']
players.push('yuvraj', 'rahul','ashwin')

console.log(players)
console.log(players.splice(2,1))  // ['dhoni']
// deletes element from the second index to the no. elements -> length
// returns deleted elements in an array

console.log(players.splice(2,0,'irfan')) // []
// adds element from the second index
// returns an empty array
console.log(players)

const fruits = ['apple','mango','kiwi','watermelon']

console.log(fruits.includes('mango'))  // true
console.log(fruits.includes('strawberry'))  // false
console.log(fruits.indexOf('kiwi')) // 2
console.log(fruits.indexOf('strawberry')) // -1

const numbers = [10,20,30,20]

console.log(numbers.indexOf(10)) // 0
console.log(numbers.indexOf(20)) // 1 
console.log(numbers.lastIndexOf(20)) // 3

console.log(fruits.slice(0,3)) // [ 'apple', 'mango', 'kiwi' ]
console.log(fruits.slice(2,3)) // [ 'kiwi' ]
console.log(fruits.slice(1)) // [ 'mango', 'kiwi', 'watermelon' ]

// split -> string to array
// join -> array to string

console.log(fruits.join(' - ')) // 'apple - mango - kiwi - watermelon'

// if no separator its joined using a comma
console.log(fruits.join()) // apple,mango,kiwi,watermelon
console.log(fruits)

// sort and reverse are mutable methods -> changes the original array 

console.log((players)) // [ 'sachin', 'virat', 'irfan', 'yuvraj', 'rahul', 'ashwin' ]
console.log(players.sort()) // [ 'ashwin', 'irfan', 'rahul', 'sachin', 'virat', 'yuvraj' ]
console.log(players) // [ 'ashwin', 'irfan', 'rahul', 'sachin', 'virat', 'yuvraj' ]

console.log(fruits)  // [ 'apple', 'mango', 'kiwi', 'watermelon' ]
console.log(fruits.reverse()) // [ 'watermelon', 'kiwi', 'mango', 'apple' ]
console.log(fruits) // [ 'watermelon', 'kiwi', 'mango', 'apple' ]

