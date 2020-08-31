var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245
  }
];



function sortArrObj(a) {
  let titleList = [];
  a.forEach(function(obj) {
    if (obj.hasOwnProperty("title")) {
      titleList.push(obj.title);
    }
  })
  //console.log(titleList)
  let sortedList = titleList.sort();
  //console.log(sortedList)
  let result = []
  for (const ele of sortedList) {
                                        //console.log(ele)
    a.forEach(function(obj) {
        console.log(ele);
      if(obj.title == ele)
        //console.log(obj.hasOwnValue(ele))
       {
          //console.log(obj)
        result.push(obj);
      }
    })
  }
  return result
}

console.log(sortArrObj(library))
