import { count } from './count';
setTimeout(function () {
  console.log('read count after 1000ms in es6 is', count);
  count += 2;
  console.log('read ++', count);
}, 1000);
