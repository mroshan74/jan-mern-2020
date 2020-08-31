var superHeroes = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]

function superPower(a, b) {
  let result = b + " is not in the super heroes list";
  if (b == 0) return "invalid input";
  else {
    const hero=a.find(function(ele){
      return (ele.name==b)
      })
      if(hero){
        result=hero.powers.join(', ')
      }
    }
  return result;
  }






console.log(superPower(superHeroes, "Molecule Man"))
//returns 'Radiation resistance, Turning tiny, Radiation blast'

console.log(superPower(superHeroes, 'Iron Man'))
//returns 'Iron Man is not in the super heroes list'