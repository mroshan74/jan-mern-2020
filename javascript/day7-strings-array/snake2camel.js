const str = "javascript_is_awesome";
function toCamel(str) {
  
  let result = "";

  const words = str.split("_");  // returns array of splitted elements 
  result = result + words[0].toLowerCase() 
  for (let i =0; i < words.length; i++) {
    result = result + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
  }
  return result

}
console.log(toCamel(str)); // JavascriptIsAwesome
