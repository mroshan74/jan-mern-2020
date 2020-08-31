const str = 'virat virat sachin virat dhoni sachin'

function wordFrequency(str){
    let getWords = str.split(' ')
    let objWord = {}
    getWords.forEach(function(word){
        if(objWord.hasOwnProperty(word)){
            objWord[word]=objWord[word]+1
        }
        else
        objWord[word]=1
    })

    console.log(objWord)
    let stars='',result=[]
    for(const star in objWord){
        for (let i = 0; i < objWord[star]; i++) {
            stars += "*"
        }
        objWord[star] = stars
        stars=''
        }
    for(const ele in objWord)
    {
        result.push([ele,objWord[ele]].join(' - '))
    }
    return (result.join(' '))
}
console.log(wordFrequency(str)) // { virat : 3 , sachin : 2, dhoni : 1}

// loop over the object
/*
    virat - ***
    sachin - **
    dhoni - *
*/

console.log(wordFrequency(str))
console.log(wordFrequency('mango apple apple apple pineapple mango mango pineapple kiwi'))