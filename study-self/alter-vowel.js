function isAlt(a) {
  let vowels = "aeiouAEIOU",result=false
  if(vowels.includes(a.charAt(0))){
    for(let i =0; i< a.length; i++){
        if(i%2==0){
            if(vowels.includes(a.charAt(i))){
                result = true
                console.log(a[i])
            }
            else{
                result = false
                console.log(a[i])
                break
            } 
       }
    }
  }
  else{
      for (let i = 0; i < a.length; i++) {
        if (i % 2 != 0) {
          if (vowels.includes(a.charAt(i))) {
            result = true;
            console.log(a[i]);
          } else {
            result = false;
            console.log(a[i]);
            break;
          }
        }
      }
  }
    return result
}
console.log(isAlt("amazon")) // true
console.log(isAlt("apple")) // false

console.log(isAlt("banana")) // true