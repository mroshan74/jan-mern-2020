function withOutVowels(str){
    let vowels='aeiou'
    let newString=''
    for(const char of str){
        if(vowels.includes(char)==false)
        {
            newString=newString+char
        }
    }
    return newString
}
console.log(withOutVowels('javascript'))