/*
 * Object.defineProperty
 * 1，必须变量扩了一倍
 * 2，不支持intermedia 写法
 * 3，不支持监听新属性
 * 4，不支持监听数组
 */
const obj = {
  _a: 2,
  b: {
    _hello: 'world',
    _foo: 'block',
  },
};

Object.defineProperty(obj, 'a', {
  get: () => {
    console.log('hook get');
    return obj._a;
  },
  set: (val) => {
    console.log('hook set');
    // obj['a'] = val;
    obj._a = val;
  },
});

obj.a = 333;
console.log(obj.a);

Object.defineProperty(obj.b, 'hello', {
  get: () => {
    console.log('hook get');
    // const v = Reflect.get(obj.b, 'hello');
    console.log(v);

    return obj.b._hello;
  },
  set: (val) => {
    console.log('hook set');
    // obj['a'] = val;
    obj.b._hello = val;
  },
});

obj.b.hello = 'nice';
console.log(obj.b.hello);

Object.defineProperty(obj, 'b.foo', {
  get: () => {
    console.log('hook get');
    return obj.b._foo;
  },
  set: (val) => {
    console.log('hook set');
    // obj['a'] = val;
    obj.b._foo = val;
  },
});

obj.b.foo = 'barr';
console.log(obj.b.foo);
console.log('---------');

const handler = {
  get: function (obj, prop) {
    const v = Reflect.get(obj, prop);
    console.log('proxy get');
    return v; // 返回obj[prop]
  },
  set(obj, prop, value) {
    console.log('proxy set');
    return Reflect.set(obj, prop, value); //设置成功返回true
  },
};
const po1 = new Proxy(obj, handler);
po1._a = '555';
po1.nb = '666';
console.log(po1._a);
