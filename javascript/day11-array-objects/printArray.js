let a = [ [1,2,3],[8,11]]

// for method
for ( let i = 0; i < a.length; i++){
    console.log('row ',i)
    for( let j = 0; j < a[i].length; j++){
        console.log(a[i][j])
    }
}

// forEach method
a.forEach(function(row,index){
    console.log('row ',index)
    for(const ele of row){
        console.log(ele)
    }
})
