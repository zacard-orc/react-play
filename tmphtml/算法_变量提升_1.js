function tff() {
  console.log(a);
  var a = 123;
}

console.log(v1);
var v1 = 100;

function foo() {
  console.log('foo v1 bf', v1);
  var v1 = 200;
  console.log('foo v1 aft', v1);
}
