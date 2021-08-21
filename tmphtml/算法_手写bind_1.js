function bindThis(f, oTarget) {
  console.log(arguments);
  let args = Array.prototype.slice.call(arguments, 2);
  console.log(args);
  return function () {
    return f.apply(oTarget, Array.prototype.slice.call(arguments).concat(args));
  };
}

const ret = bindThis(
  function () {
    console.log(this.name);
    return this;
  },
  { name: 'tom' },
)();

console.log(ret);
