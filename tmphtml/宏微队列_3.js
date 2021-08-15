console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve(21).then(console.log);
}, 0);

Promise.resolve(3).then(console.log);
Promise.reject(4).then(console.log).catch(console.error);

console.log(5);

setTimeout(() => {
  console.log(6);
  Promise.resolve(61).then(console.log);
}, 0);
