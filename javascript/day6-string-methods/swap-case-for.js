function swapCase(str) {
  let newCase = ""
  for (let i =0; i<str.length;i++) {
    if (str[i] == str[i].toUpperCase()) {
      newCase = newCase + str[i].toLowerCase()
    } else {
      newCase = newCase + str[i].toUpperCase()
    }
  }
  return newCase
}
console.log(swapCase("jAvaSCript"))
console.log(swapCase("MuhaMMed RoshaN"))
