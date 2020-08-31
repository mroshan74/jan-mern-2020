function evenOdd(a) {
  if (a==0) 
  {let array = 'empty array'
  return array}
    let even = [],
      odd = [],
      result = [];
    for (const num of a) {
      if (num % 2 == 0) {
        even.push(num);
      } else odd.push(num);
    }
    result.push(even, odd);
    return result;
  }

console.log(evenOdd([1, 2, 3, 4, 5, 6]));
console.log(evenOdd([]));

