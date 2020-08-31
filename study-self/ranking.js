function rankings(a) {
  let rankObj = {},
    place = 1;
  console.log(a);
  const org = a.slice(0);
  // sort mutate thr array throughout the program 
  // slice can copy the original value without affecting the array
  const rank = a.sort((a, b) => b - a);
  console.log(a);
  // for (const num of rank) {
  //     rankObj[num]= place
  //     place++
  // }
   let result = []
  console.log(org);
  // for (const ele of org) {
  //     for (const key in rankObj) {
  //         if (ele == parseInt(key)) {
  //             console.log(ele,key,rankObj[key])
  //             result.push(rankObj[key])
  //         }
  //     }
  // }
  console.log(result);
}

console.log(rankings([10, 5, 20])) // [2, 3, 1]

// console.log(rankings([6, 8, 1, 12, 4, 3, 9])) // [4, 3, 7, 1, 5, 6, 2]

// console.log(rankings([100])) // [1]

// console.log(rankings([4, 2, 3, 1])) // [1, 3, 2, 4]
