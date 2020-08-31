const colorAssociation = [
    ['white','goodness'],
    ['blue','tranquility']
]

function getColorAssociation(arr){
    let result=[]
        arr.forEach(function(arrBlock){
        let objBlock = {}
        objBlock[arrBlock[0]]=arrBlock[1]
        result.push(objBlock)
    })
    return result
}
console.log(getColorAssociation(colorAssociation))