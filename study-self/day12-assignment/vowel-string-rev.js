function reverseVowels(a) {
  let vowels = "aeiouAEIOU";
  let yesVowels = [], newString=''
    for(const ch of a){
        if(vowels.includes(ch)){
            yesVowels.push(ch)
        }
    }
    console.log(yesVowels)
  let rev = yesVowels.length-1;
  console.log(rev)
  for (let i = 0; i < a.length; i++) {
    if (vowels.includes(a[i])) {
      newString+=yesVowels[rev]
      rev--}
    else
        newString+=a[i]
    }
    return newString
  }

console.log(reverseVowels("Tomatoes")) // "Temotaos"
console.log(reverseVowels("Reverse Vowels In A String")) // "RivArsI Vewols en e Streng"