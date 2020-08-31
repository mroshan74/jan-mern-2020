// set default parameter values
function add(n1,n2) {
    n1 = typeof n1 == 'undefined' ? 0: n1
    n2 = typeof n2 == 'undefined' ? 0: n2


/* if(typeof n1 == 'undefined') {
    n1=0
}
else{
    n1=n2
}
if(typeof n2 == 'undefined'){
    n2=0
}
else{
    n2=n2
}
*/
console.log(n1,n2)
return n1 + n2
}
console.log(add(10,30))  // 40
console.log(add())  // 0
console.log(add(10))  // 10

//es6 feature

function sum(n1=0,n2=0){
    console.log(n1+n2)
    return n1+n2
}

console.log(sum())  // 0
console.log(sum(20))  // 20
console.log(sum(30,40))  //30

