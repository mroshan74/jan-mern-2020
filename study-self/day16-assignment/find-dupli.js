function findDuplicate(a) {
  let result = [];
  for (const num of a) {
    let res = a.filter(function(ele) {
      return num == ele;
    })
    let iter=result.find(function(rep){
        return rep==num
    })
    if (res.length > 1 && !iter) {
      result.push(num);
    }
}
  return result;
}
console.log(findDuplicate([10, 20, 30, 40, 10, 40]));