// hof - higher order functions


// a function that returns a function as a value

function sum(){
    return function(a,b){
        return a+b
    }
}

console.log(sum()(10,25))  // 35