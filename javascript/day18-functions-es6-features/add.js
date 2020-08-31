let  n1 = 10, n2 =20

function add1(a1,a2) { // gets the values from the call
    n1 = 100, n2 = 200  // variable not declared, replace the declaration outside 
    return a1 + a2 
}

console.log(add1(n1,n2)) // 30
console.log(n1,n2) // 100 200

let n3 = 10, n4 = 20

function add2(n3, n4) { // variables are locally declared
  n3 = 100, n4 = 200
  return n3 + n4
}
console.log(add2(n3, n4))  // 300
console.log(n3, n4) // 10 20