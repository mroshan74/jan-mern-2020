const article = {
    id : 1 ,
    title : 'javascript' ,
    body : 'most popular language'
}

function obj2Arr(obj){
    const result = []
    for (const key in obj){
        result.push([key,obj[key]])
    }
    return result
}

console.log(obj2Arr(article))  //[ ['id', 1], ['title', 'javascript'], ['body', 'most popular language'] ]
