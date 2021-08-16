var { count } = require('./count');
setTimeout(function () {
  console.log('read count after 1000ms in commonjs is', count);
  count += 2;
  console.log('read ++++', count);
}, 1000);
