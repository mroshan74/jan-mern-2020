function reArrangeArray(a) {
  let result = [], final=[]
  function append(arr) {
    if (arr.length == 0) 
    return result;
    else {
        for(let i =0; i<a.length;i++){
      if (a[i] < 0) {
          if (result[result.length - 1] > 0 || result[result.length - 1] == undefined) {
            result.push(a[i]);
            //console.log(result);
            a.splice(i, 1);
            //console.log(a);
            append(a);
          }
      } else if (a[i] > 0) {
        if (result[result.length - 1] < 0) {
          result.push(a[i]);
          a.splice(i, 1);
          //console.log(a);
          //console.log(result);
          append(a);
        } 
      }
    }
    }
  }
  append(a)
  final=result.concat(a)
  return final
}
console.log(reArrangeArray([1, 2, 3, -4, -1, 4])) //[-4, 1, -1, 2, 3, 4]
console.log(reArrangeArray([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8])) //  [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]