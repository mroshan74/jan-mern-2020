const a1 = [10,20] // 10
const a2 = [1,2,1,2,1,3] //2

function balanced(a){
    let mid = a.length/2,bal
    if(a.length==2)
    {
      bal=a[1]-a[0]  
    }
    else{
    let sum1=0, sum2=0
    for(let i=0 ; i<=mid;i++){
        sum1+=a[i]
    }
    for(let j=a.length-1 ; j>=mid+1;j--){
        sum2+=a[j]     
    }

   bal= sum2-sum1
}
   if(bal<0)
   {
       return bal*-1
   }
   else
   return bal
}
console.log(balanced(a2))
console.log(balanced(a1))