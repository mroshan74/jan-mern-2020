// var - function scoped - life of the variable
function display(){
    console.log(msg) // undefined
    if(true) {
        var msg = 'hi there'
    }
    return msg
}

console.log(display())

// let & const - block scoped
function print() {
    // console.log(msg) //
    if(true) {
        let msg = 'hello there'
        return msg
    }
    // return msg => block scoped
}

console.log(print())