const  name = 'dct academy'

console.log(name.length) // 11
console.log(name[0])  // 'd'
console.log(name[name.length]) // undefined
console.log(name[name.length-1]) // 'y'

for( let i = 0 ; i < name.length ; i++)
{
    console.log(i, name[i])
}