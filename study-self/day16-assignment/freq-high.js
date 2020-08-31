var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findFrequent(a) {
    let count=0,result=[],freq=[]
    for(const ele of a){
            let iter=freq.find(function(eleRep){
                return ele==eleRep
            })
            if(!iter){
            a.forEach(function(ch){
            if (ch==ele)
            count++ 
            freq.push(ele) 
        })
        result.push([count,ele])
        count=0
    }
    }result.sort()
    return result[result.length-1][1]+' ( '+result[result.length-1][0]+ ' times )'

    
}

console.log(findFrequent(arr1))
//'a ( 5 times )' 