const p1 = {
    name : 'sneha',
    city : 'kozhikode',
    details(){
        return `${this.name}(${this.gender}) lives in ${this.city}`
    },
    gender : 'female'
}

const p2 = {
    name : 'ajmal',
    city : 'areecode',
    details(){
        return `${this.name}(${this.gender}) lives in ${this.city}`
    },
    gender : 'male'
}

const p3 = {
  name: "ambu",
  city: "kollam",
  details() {
    return `${this.name}(${this.gender}) lives in ${this.city}`
  },
  gender: "male"
}

const p4 = {
  name: "azim",
  city: "kannur",
  details() {
    return `${this.name}(${this.gender}) lives in ${this.city}`
  },
  gender: "male"
}



console.log(p1.details())
console.log(p2.details())
console.log(p3.details())
console.log(p4.details())


