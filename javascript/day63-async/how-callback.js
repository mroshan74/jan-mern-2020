

Array.prototype.dctForEach = function(cb){
    for( let i =0; i< this.length; i++){
        cb(this[i], i, this)
    }
}

const numbers = [10 , 20, 30, 40]

//callback declared inline
numbers.dctForEach(function(ele){
    console.log(ele)
})

// callback fn is not declared inline
const print = (ele) => {
    console.log(ele)
}

numbers.dctForEach(print)