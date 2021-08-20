// 闭包问题，初始定义太快，所以300ms后，i已经6
for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    // console.log(i);
  }, i * 300);
}

// 用let限定作用域，解题
for (let j = 1; j <= 5; j++) {
  setTimeout(() => {
    // console.log(j);
  }, j * 300);
}

// 用IIFE来锁死作用域，解题，让var不要从块里逃出去
for (var k = 1; k <= 5; k++) {
  (function (_k) {
    setTimeout(() => {
      // console.log(_k);
    }, 300);
  })(k);
}

// 用return function来锁死作用域，让var不要从块里逃出去
for (var m = 1; m <= 5; m++) {
  const xf = (m2) => {
    return function () {
      // console.log(m2);
    };
  };
  setTimeout(xf(m), 300);
}

// 用const循环来锁死作用域
for (var n = 1; n <= 5; n++) {
  const b = [];
  Object.assign(b, [n]);
  setTimeout(() => {
    // console.log(b[0]);
  }, 300);
}

// 用const循环来锁死作用域
for (var p = 1; p <= 5; p++) {
  var px = [p];
  px.map((el) => {
    setTimeout(() => {
      console.log(el);
    }, 300);
  });
}
