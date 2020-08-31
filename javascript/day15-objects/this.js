console.log(this)  // {}

function showThis(){
    console.log(this)  // global object
}

console.log(showThis())

const person = {
    name : 'arjun' ,
    thisValue : function(){
        return this.name //  current object
    },
  alterThis:function (){
      return this
  }
}

console.log(person.thisValue())

console.log(person.alterThis.bind({name : 'deepa'})())