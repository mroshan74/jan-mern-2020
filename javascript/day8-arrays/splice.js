const players = ["sachin", "virat", "dhoni"];
players.push("yuvraj", "rahul", "ashwin");

console.log(players);
console.log(players.splice(2, 1)); // ['dhoni']
// deletes element from the second index to the no. elements -> length
// returns deleted elements in an array

console.log(players);  // [ 'sachin', 'virat', 'yuvraj', 'rahul', 'ashwin' ]
console.log(players.splice(3, 2)); // [ 'rahul', 'ashwin' ]

console.log(players); // [ 'sachin', 'virat', 'yuvraj' ]


console.log(players.splice(2, 0, "irfan")); // []
// adds element from the second index
// returns an empty array

console.log(players); //[ 'sachin', 'virat', 'irfan', 'yuvraj' ]

