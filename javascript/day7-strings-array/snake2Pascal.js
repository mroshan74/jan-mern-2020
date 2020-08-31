const str = 'javascript_is_awesome'
function toPascal(str){
    let newString=''
    let result=''

    const words = str.split('_')
    for( let i =0; i < words.length; i++){
         result = result + words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()
    }
    return result

    // for(let i = 0; i < str.length; i++)
    // {
    //     if(str[i] =='_')
    //     {
    //         newString+=(str[i+1].toUpperCase())
    //         i++
    //     }
    //     else
    //     newString+=(str[i])
    // }
    // return newString

}
console.log(toPascal(str))  // JavascriptIsAwesome
