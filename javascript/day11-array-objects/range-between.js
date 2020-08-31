function range(n1,n2){
    let result = [];
    for( let i = n1; i <= n2; i++){
        result.push(i) // here i is n1(10) then i is updated
    }
    return result
}
console.log(range(10,15))