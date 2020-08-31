function strCount(str, char) {
  let result = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] == char) {
  //     result++;
  //   }
  // }
  for(const ch of str){
    {
      if(ch == char)
      result++
    }
  }
  return result;
}
console.log(strCount("hello", "l")) //2
console.log(strCount('muhammed','m'))  //3


