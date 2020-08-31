// function declaration
// function add(){
// }
const city = 'bangalore'

// function expression do not get hoisted  -> functions do
// console.log(sum(15,25))  -> ReferenceError -> function expression called before definition

// when u assign a function as a value to a variable, we call it as function express
// we can pass functions as arguments to other functions

const sum = function(n1,n2){ // ->function expression // anonymous function - a function without name 
    // arguments
    // default parameters via es5, es6
    // parameters are local variables
    // less args then params undefined, more args gets ignored
    return n1 + n2
}

console.log(city)
console.log(sum)  // [Function: sum]
console.log(sum(10,20))  // 30