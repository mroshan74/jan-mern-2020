function missingElement(a) {
    sorted=a.sort()
    console.log(sorted)
    let first = sorted[0],sum1=0,sum2=0
    console.log(sorted[0])
    for (let i = 0; i < sorted.length; i++) {
        sum1 += a[i]
    } 
    for (let i = 0; i < sorted.length+1; i++) {
        sum2 += first;
        first++
      }
     console.log(sum1);
     console.log(sum2);
    return sum2-sum1
}
console.log(missingElement([1, 2, 3, 5]));