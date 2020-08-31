
function nonRepeatedChar(a) {
    let b=a.split('')
    console.log(b)
    for (const char of b) {
        let res = b.filter(function (ele) {
        return char==ele
        })
        if (res.length==1) {
        return char
    }
}
}

console.log(nonRepeatedChar("abacddbec"));