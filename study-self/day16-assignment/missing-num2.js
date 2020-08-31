function missingElement(a) {
  let sum = 0;
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  a.sort()
  console.log(a)
  
  for (i = a[0]; i <= a[a.length - 1]; i++) {
    total += i;
  }
  let missingNo = total - sum;
  return missingNo;
}
console.log(missingElement([1, 2, 3, 5]));