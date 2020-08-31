function fakeBinary(str){
    let result = ''
    for(let i = 0; i < str.length; i++)
    {
        if(parseInt(str[i]) >= 5)  // type conversion -> explicit conversion of string to number
        {
            result = result + 1
        }
        else{
            result = result + 0
        }
    }
    return result
}
console.log(fakeBinary('263391')) // '010010'
console.log(fakeBinary('6612')) // '1100'