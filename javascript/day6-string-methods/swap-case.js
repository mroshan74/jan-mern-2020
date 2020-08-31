function swapCase(str){
    let newCase = ''
    for( const ch of str)
    {
        if (ch==ch.toUpperCase())
        {
            newCase= newCase+ch.toLowerCase()
        }
        else
        {
            newCase= newCase+ch.toUpperCase()
        }
    }
    return newCase
}
console.log(swapCase('jAvaSCript'))
console.log(swapCase('MuhaMMed RoshaN'))