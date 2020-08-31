function putDash(a) {
  let result = ''
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0 && a[i+1]%2==0) {
    
        result += a[i] + '-' 
    
    } else 
    result += a[i];
  }
  return result;
}
console.log(putDash('025468'))
// the output should be '0-254-6-8'. 