const arr = [
  ['id', 1],
  ['title', "javascript"],
  ['body',"most popular language"]
]

function arr2Obj(arr){
    const result = {}
    arr.forEach(function(ele){
        result[ele[0]]=ele[1]
        
    })
    return result
}

console.log(arr2Obj(arr))
