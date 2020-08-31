function filterValues(values){
    let result = []
    for( let i = 0; i < values.length; i++){
        if(values[i]){
            result.push(values[i])
        }
    }
    return result
}

function filterNonTrue(values){
const nonTrue = values.filter(function(ele){
    return !ele
})
return nonTrue
}

console.log(filterValues([58,'','abcd',true,null,false,0])) // [ 58, 'abcd', true ]
console.log(filterNonTrue([58,'','abcd',true,null,false,0])) // [ '', null, false, 0 ]
