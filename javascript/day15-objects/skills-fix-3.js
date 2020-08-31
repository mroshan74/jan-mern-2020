const temp = { name : 'muhammed'}
const developer = {
  name: "rajesh",
  skills: ["js", "react", "node", "py"],
  
  showSkills1: function() {
    // this = current object
    this.skills.forEach(function(s) {
      console.log(`${this.name} knows ${s}`)
    }.bind(this))  // the argument passed to the bind method (obj) will now become the value of this keyword inside the function
  },

  showSkills2: function() {
    // this = current object
    this.skills.forEach(function(s) {
      console.log(`${this.name} knows ${s}`)
    }.bind(temp))  // -> can pass argument of other declared objects also
  }

}

developer.showSkills1()
/*
rajesh knows js
rajesh knows react
rajesh knows node
rajesh knows py
*/
console.log()
developer.showSkills2()
/*
muhammed knows js
muhammed knows react
muhammed knows node
muhammed knows py
*/
