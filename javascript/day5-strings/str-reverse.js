// const name = 'dct'
// let result =''
// result = name[0] + result // 'd'
// result = name[1] + result // 'cd'
// result = name[2] + result // 'tcd'

function strReverse(str){
    let result = ''
    for (let i = 0; i < str.length; i++)
    {
        result = str[i] + result
    }
    return result
}

console.log(strReverse('muhammed roshan'))
console.log(strReverse('dct'))
console.log(strReverse('banglore'))