const prWait = (tmout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, tmout);
  });
};
function createFetcher(fn) {
  const fetcher = {
    status: 'pedding',
    result: null,
    p: null,
  };
  return function () {
    const getDataPromise = fn();
    fetcher.p = getDataPromise;
    getDataPromise.then((result) => {
      /* 成功获取数据 */
      fetcher.result = result;
      fetcher.status = 'resolve';
    });

    if (fetcher.status === 'pedding') {
      /* 第一次执行中断渲染，第二次 */
      throw fetcher;
    }
    /* 第二次执行 */
    if (fetcher.status) return fetcher.result;
  };
}
try {
  const res1 = createFetcher(prWait)();
  console.log(res1);
} catch (e) {
  console.log('error1', e);
}

setTimeout(() => {
  try {
    const res1 = createFetcher(prWait)();
    console.log('normal2', res1);
  } catch (e) {
    console.log('error2', e);
  }
}, 2000);
