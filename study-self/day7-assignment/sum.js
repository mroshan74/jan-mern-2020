function sumOfDigits(a) {
  let sum = 0;
    let string=a.toString()
    console.log(string)

  for (let i = 0; i < string.length; i++) {
    rem = a % 10;
    a=parseInt(a/10)
    console.log(a);

    sum += rem;
    console.log(sum);
  }
  return parseInt(sum);
}
console.log(sumOfDigits(414))
