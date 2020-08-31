function add() {
    let sum = 0
    for( let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

console.log(add(10,20))
console.log(add())
console.log(add(10,20,30,40))
console.log(add(10,20,30))


// method overloading - function with the same name, able to handle multiple number of arguments