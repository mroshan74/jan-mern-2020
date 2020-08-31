const developer = {
    name : 'rajesh' ,
    skills: ['js','react','node','py'] ,
    showSkills: function(){
        // this = current object
        this.skills.forEach(function(s){   // inside function of a function
            // this = global object
            console.log(`${this.name} knows ${s}`)
        })
    }
}

developer.showSkills()
/*
undefined knows js          ---------------> this = global object = where name is not defined
undefined knows react
undefined knows node
undefined knows py
*/