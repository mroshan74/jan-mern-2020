function b() {
    var v;
    console.log(v);
}
function a() {
    var v = 2;
    console.log(v);
    b();
}
var v = 1;
console.log(v);
a();