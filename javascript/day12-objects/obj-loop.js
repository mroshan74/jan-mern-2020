const article = {
    id : 1,
    name : 'Javascript' ,
    body : 'Javascript is the most popular language of 2020'
}

console.log(article.name)  // 'Javascript'
console.log(article['name'])  // 'Javascript'

const prop = 'name'
console.log(article.prop) // undefined        
/*
here .prop doesn't work because prop is a declared variable which has the property name
so article[prop] ->article.name
*/ 
console.log(article[prop])  // 'Javascript' // article['name']

for ( const prop in article){   // objects only works with for-in, access the property of the object
    // if array of objects [{},{}] go with 'for of' loop
    console.log(prop, article[prop]);

}