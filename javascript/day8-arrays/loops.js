let array = ['sachin', 'virat', 'dhoni']
for( let i = 0; i < array.length; i++)
{
    console.log(array[i])
}

// forEach - only used for arrays
array.forEach(function(ele){
    console.log(ele)
})

// function used inside the method forEach is call back function
// for in -> objects
// for of -> string, array ES6 2015 feature