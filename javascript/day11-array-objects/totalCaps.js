const arr = ['AwesomE','ThIngs','hAppEning','HerE']

function totalCaps(arr){
    let count = 0
    arr.forEach(function(yesCaps){
        for(const ch of yesCaps){
            if(ch==ch.toUpperCase()){
                count++
            }    
        }
    })
    return count
}

console.log(totalCaps(arr))  // 8