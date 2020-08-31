var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
}
function deleteProperty(a, b) {
  for (const ele in a) {
      console.log(ele);
      if(ele==b){
          console.log(a[ele],ele)
          delete a[ele]
      }
      
//       console.log(ele.hasOwnProperty(b))
}
return a

}
console.log(deleteProperty(student,'name'))
// delete student.name
// console.log(student)
console.log(student.hasOwnProperty('name'))