function includes(a,b){
    let result=false 
        for(const num of a)
        {
            if(num==b)
            {    return true
            }
        }
    return result
}
let p=[1,2], q=2
console.log(includes(p,q))
