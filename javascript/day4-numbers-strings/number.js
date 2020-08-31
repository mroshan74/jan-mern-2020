const price = 125, temperature = 25.6

console.log(typeof price)
console.log(typeof temperature)

console.log(Math.PI)  // 3.141592653589793
console.log(Math.round(temperature)) // 26

const x = 5,
  y = 6,
  z = 4,
  p = -25.6,
  q = 1.634589,
  r = [10, 9, 18, 20, 0, 99];
console.log(Math.pow(x,y))  // 15625
console.log(Math.sqrt(z))   // 2
console.log(Math.ceil(q))   // 2
console.log(Math.abs(p))    // 25.6
console.log(Math.floor(q))  // 1
console.log(Math.min(10, 9, 18, 20, 0, 99)); // 0
console.log(Math.max(10, 9, 18, 20, 0, 99)); // 99
console.log(typeof r)  // 'object'
console.log(Math.min(r))  // NaN - arithematic operation not possible 
// can't pass array to Math.min
console.log(typeof NaN)   // 'number'
console.log(5*'a') // NaN




