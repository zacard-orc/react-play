console.log(1);
setTimeout(() => {
  console.log(2);
}, 20);

new Promise((resolve) => {
  console.log(3);
  resolve();
  setTimeout(() => {
    console.log(4);
  }, 20);
}).then(() => {
  console.log(5);
});

console.log(6);
