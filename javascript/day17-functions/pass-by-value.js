// all primitives are pass by value

const fruit = 'mango'

function changeFruit(fruit){
    console.log('inside function before re-assignment',fruit) // 'mango'
    fruit = 'kiwi'
    console.log('after re-assignment',fruit) // 'kiw'
    return fruit
}

console.log('before function call',fruit)  // 'mango'
console.log('return of function call', changeFruit(fruit)); // 'kiwi'
console.log('after function call',fruit) // 'mango'