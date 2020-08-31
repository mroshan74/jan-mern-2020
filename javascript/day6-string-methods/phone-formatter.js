function formatter(str){
    //let newFormat = (`(${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6)}`) //es6
    //return newFormat
    // let newFormat2 = ('('+str.slice(0,3)+')'+' '+str.slice(3,6)+' '+str.slice(6)) //es5
    // return newFormat2
    let newFormat3 = `(${str.substr(0, 3)}) ${str.substr(3, 3)}-${str.slice(6)}`;
    return newFormat3
}
console.log(formatter('1234567890'))
console.log(formatter('8989676767'))