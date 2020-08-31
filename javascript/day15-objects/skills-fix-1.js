const developer = {
  name: "rajesh",
  skills: ["js", "react", "node", "py"],
  showSkills1: function() {
      for ( let i =0; i < this.skills.length; i++)
      {
          console.log(`${this.name} knows ${this.skills[i]}`)
      }
  },
  showSkills2: function() {
    // this = current object
    for (const skill of this.skills){
        console.log(`${this.name} knows ${skill}`)
    }
  }
}

developer.showSkills1()
console.log()
developer.showSkills2()
