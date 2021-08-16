const mo = {
  a: '1',
  b: 22,
  c: function () {
    console.log('fn c');
  },
  d: {
    da: 1,
    db: [1, 2, 3, 4],
    dc: {
      dca: '111',
      dcb: '222',
      dcc: function () {
        console.log('fn dcc');
      },
    },
  },
};

const deep = (obj) => {
  if (!typeof obj === 'object') return obj;
  const target = Array.isArray(obj) ? [] : {};
  for (let k in obj) {
    if (typeof obj[k] === 'object') {
      target[k] = deep(obj[k]);
    } else {
      target[k] = obj[k];
    }
  }
  return target;
};

const cl = deep(mo);

console.log(cl);
