const emp = {
    id : 1 ,
    name : 'rakesh' ,
    department : 'tech',
    details: function(){  // when a function is assigned to a property of an object, is called a method 
        return `${this.id} ${this.name} ${this.department}`  // this refers to the object itself
    }
}

 console.log(emp.name) // 'rakesh
 console.log(emp.details) // [Function: details] -> refers to property
 console.log(emp.details()) // '1 rakesh tech'  -> method called ()