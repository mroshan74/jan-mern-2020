let n1 = 10, n2 = 20; // no re-assigning take place because n1 and n2 are declared in function parameter

function add(n1,n2) {
  n1 = 100, n2 = 200; // n1,n2  declared in parameters -> local declaration
  return n1 + n2;
}
console.log(add()); // 300
console.log(n1, n2); // 10 20
