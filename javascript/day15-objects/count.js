const counter = { 
    count : 0 ,
    getCount : function() { return this.count} ,
    up : function() { return ++this.count} ,
    down : function() { return --this.count} ,
    reset : function() { return this.count = 0 } ,
    incrementBy : function(getValue) { return this.count+=getValue}

}

console.log(counter.count) // 0
console.log(counter.getCount()) // 0
console.log(counter.up())  // 1
console.log(counter.getCount())  // 1
console.log(counter.up()) // 2
console.log(counter.down())  // 1 
console.log(counter.getCount()) // 1
console.log(counter.incrementBy(10)) // 11
console.log(counter.getCount())  // 11

console.log(counter.down()) // 10
