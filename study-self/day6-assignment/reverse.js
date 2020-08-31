function reverse(a) {
  let b = [],c=a.length-1
  for (let i = 0; i < a.length; i++) {
    b[i] = a[c--];
  }
  return b;
}
let p=[1,2,3,4]
console.log(reverse(p))