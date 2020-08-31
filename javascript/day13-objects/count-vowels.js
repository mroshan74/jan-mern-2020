const str = 'javascript'

function findEachVowels(str){
    
    const vowels = 'aeiou'
    const result = { a: 0, e : 0, i : 0, o : 0, u : 0}
    
    for (const char of str){
        //if(vowels.includes(char)){
        if(result.hasOwnProperty(char)){
            result[char] = result[char] + 1
        }
    }
    return result
}

console.log(findEachVowels(str))