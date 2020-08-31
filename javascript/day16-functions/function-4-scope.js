  const city = 'bangalore'
  // any variable declared outside the function becomes global variable

  function showCity(){
      console.log(city)  // lexical scope
      // console.log(emp) // Reference Error, as emp is not declared
  }
  showCity()
