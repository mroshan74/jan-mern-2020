function sum_without_h_L(a) {
  let res=a.sort(function(a,b){
      return a-b
  })
  console.log(res)
  let sum = 0;
  for (let i = 1; i < a.length - 1; i++) 
 { console.log(a[i])
  sum += a[i];}
  return sum;
}

console.log(sum_without_h_L([6, 2, 1, 8, 10]));