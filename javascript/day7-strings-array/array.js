// ordered, integer,collection of values
const p1 = 'sachin', p2 ='sewag', p3 ='rahul', p4 = 'virat'
console.log(p1) //'sachin'

const players = ['sachin','sehwag','rahul','virat']  // new Array ('sachin','sehwag','rahul','virat')

console.log(players[0]) // 'sachin'

console.log(players)

const fruits = ['apple','mango','kiwi','watermelon']
// properties and methods

console.log(fruits.length) // 4

// methods
// mutable methods - that changes the original array
console.log(players.unshift(333)) // 5
console.log(players) // [ 333 , 'sachin', 'sehwag', 'rahul', 'virat' ]

// adds element/s to the beginning of the array
console.log(players.unshift('shikar'))  // 6
console.log(players) // [ 'shikar', 'dhoni', 'sachin', 'sehwag', 'rahul', 'virat' ]

// remove element from thr end of te array
console.log(players.pop()) // virat
console.log(players) // [ 'shikar', 'dhoni', 'sachin', 'sehwag', 'rahul' ]

// remove element from the beginning of the array
console.log(players.shift())  // shikar
console.log(players) // [ 'dhoni', 'sachin', 'sehwag', 'rahul' ]



