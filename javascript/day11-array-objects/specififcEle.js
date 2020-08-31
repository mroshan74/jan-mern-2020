function removeElement(arr,name){
    for( let i = 0; i < arr.length; i++){
        if(arr[i] == name){
            arr.splice(i,1)
            break
        }
    }
    return arr
}

// const index = arr.indexOf(name)
// if(index >= 0){
//     arr.splice(index,1)
// }
// return arr
// }

console.log(removeElement(['apple','banana','mango','pineapple','berry'],'mango'))