const article = {
  id: 1,
  title: "javascript",
  body: "most popular language"
}
function getKeys(obj){
    let result = []
    for (const keys in obj)
    {
        result.push(keys)
    }
    return result
}

function getValues(obj){
    let result = []
    for(const keys in obj)
    {
        result.push(obj[keys])
    }
    return result
}

console.log(getKeys(article))
console.log(getValues(article))
