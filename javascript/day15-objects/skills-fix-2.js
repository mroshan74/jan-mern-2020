const developer = {
  name: "rajesh",
  skills: ["js", "react", "node", "py"],
  showSkills: function() {
    // this = current object
    // assign value of this to another variable, use that variable inside the function instead of 'this' keyword
    const obj=this
    this.skills.forEach(function(s) {
      // lexical scoping - the assigned obj is available within the scope of function locally
      // not this -> inside another function - global object
      console.log(`${obj.name} knows ${s}`)
    })
  }
}

developer.showSkills()
