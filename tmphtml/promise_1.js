// 发布订阅模式
class EventEmitter {
  constructor() {
    // 事件对象，存放订阅的名字和事件  如:  { click: [ handle1, handle2 ]  }
    this.events = {};
  }
  // 订阅事件的方法
  on(eventName, callback) {
    if (!this.events[eventName]) {
      // 一个名字可以订阅多个事件函数
      this.events[eventName] = [callback];
    } else {
      // 存在则push到指定数组的尾部保存
      this.events[eventName].push(callback);
    }
  }
  // 触发事件的方法
  emit(eventName, ...rest) {
    // 遍历执行所有订阅的事件
    this.events[eventName] &&
      this.events[eventName].forEach((f) => f.apply(this, rest));
  }
  // 移除订阅事件
  remove(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (f) => f != callback,
      );
    }
  }
  // 只执行一次订阅的事件，然后移除
  once(eventName, callback) {
    // 绑定的时fn, 执行的时候会触发fn函数
    const fn = (...rest) => {
      callback.apply(this, rest); // fn函数中调用原有的callback
      this.remove(eventName, fn); // 删除fn, 再次执行的时候之后执行一次
    };
    this.on(eventName, fn);
  }
}

function XPromise(fn) {
  let self = this;
  let status = 'pending';
  let value = undefined;
  let succCB = undefined;
  const ee = new EventEmitter();

  // success
  function resolve(value) {
    console.log('bbbb', status, self);
    if (status === 'pending') {
      self.value = value;
      self.status = 'resolve';
      console.log('change to resolve');
      // ee.emit('change', value);
      if (self.succCB) {
        self.succCB(value);
      }
    }
  }

  // rejct
  function reject(reason) {
    if (status === 'pending') {
      self.reason = reason;
      self.status = 'reject';
    }
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }

  XPromise.prototype.then = function (resolve, reject) {
    let self = this;
    // bug settimeout wait
    console.log('do then', this.status, self.status, status);
    if (this.status === 'resolve') {
      resolve(self.value);
    }

    if (this.status === 'reject') {
      resolve(self.reason);
    }

    if (this.status === undefined) {
      this.succCB = resolve;
      // ee.on('change', () => {
      //   console.log('do ee change');
      //   resolve(self.value);
      // });
    }
  };
}

const mp = new XPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('ttttt');
  }, 500);

  // resolve('ttttt');
});

mp.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  },
);
