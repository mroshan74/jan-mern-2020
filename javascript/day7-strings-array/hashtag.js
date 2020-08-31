const str = 'javascript is awesome'
function hashTag(str){
    newString='#'
    const words=str.split(' ')
    for (let i = 0; i < words.length; i++) {
        newString = newString + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    }
    return newString

}
console.log(hashTag(str)); // #JavascriptIsAwesome


