let n1 = 10, n2 = 20 // re-assigning take place because n1 and n2 not declared in function

function add(){
    n1 = 100, n2 =200  // n1,n2 not declared
    return n1+n2
}
console.log(add()) // 300
console.log(n1,n2) // 100 200