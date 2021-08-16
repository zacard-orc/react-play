const Sample = function () {
  this.name = 'tom';
};

const Ft = function () {
  this.name = 'ft';
};

Sample.prototype.hello = 'world';
Ft.prototype.nice = 'shirt';

const sam = new Sample();

function instOf(L, R) {
  const baseType = [
    'string',
    'number',
    'boolean',
    'undefined',
    'symbol',
    'bigint',
  ];
  if (baseType.includes(typeof L)) return false;

  let RightProto = R.prototype;
  L = L.__proto__;
  while (true) {
    if (L === null) {
      return false; // Object.prototype.__proto__ oc13=>null
    }
    if (L === RightProto) {
      return true;
    }
    L = L.__proto__;
  }
}

console.log(instOf(sam, Sample));
console.log(instOf(sam, Ft));
