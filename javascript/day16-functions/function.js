// anatomy of function
// function - keyword
// function name - add
// parameters - n1,n2 - are also called as local variables inside the function

function add(n1,n2){
    // return is used to return a value from the function
    return n1 + n2
    // if we don't use the return keyword, by default javascript return undefined from a function
}

// calling, invoking, executing
// arguments - 10, 20

const result = add(10,20)
console.log(result)

console.log(add(25,35))