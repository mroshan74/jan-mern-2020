const str='resource'
function chop(str,cutLength)
{
    let newString=[],cutString
    for (let i = 0 ; i < str.length ; i++)
    {
        cutString=str.substr(i,cutLength)
        i=i+cutLength-1
        newString.push(cutString)
    }
    return newString
}
console.log(chop(str,2))
console.log(chop(str, 3))
console.log(chop(str, 4))
console.log(chop(str, 5))
console.log(chop(str, 1))