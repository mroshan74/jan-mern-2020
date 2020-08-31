function strCount(str,char){
    let result=0
    for(let i =0;i<str.length;i++)
    {
        if(str[i] == char){
            result++
        }
    }
    return result
}
console.log(strCount('hello','l'))  //2