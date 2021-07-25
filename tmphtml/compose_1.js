function compose(...funcs) {
  console.log('cm =>', funcs);
  // if (funcs.length === 0) {
  //   return (arg) => arg;
  // }
  //
  // if (funcs.length === 1) {
  //   return funcs[0];
  // }

  // return [1, 2, 3, 4].reduce((prev, b, idx) => {
  return funcs.reduce((prev, b, idx) => {
    console.log('_red', prev, b, idx);
    const tmpf = (...args) => {
      console.log('tmf,', idx, args);
      prev(b(...args));
    };
    return tmpf;
  });
}

// function f
const f = (arg) => {
  console.log('f =>', arg);
  return `函数f(${arg})`;
};

// function g
const g = (arg) => {
  console.log('g =>', arg);
  return `函数g(${arg})`;
};

// function h 最后一个函数可以接受多个参数
const h = (...arg) => {
  console.log('h =>', arg);
  return `函数h(${arg.join('_')})`;
};

const bb = compose(f, g, h)('a', 'b', 'c');
console.log(bb);

[1, 2, 3, 4].reduce((prev, el, idx) => {
  console.log(el, idx);
});

[1, 2, 3, 4].reduce((prev, el, idx) => {
  console.log(el, idx);
}, []);
