function unShift(a, b) {
  for (let i = a.length; i >0 ; i--) {
    a[i]=a[i-1]
  }
  a[0]=b
  return a.length;
}
let p=[1,2,3],q=4
console.log(unShift(p,q))