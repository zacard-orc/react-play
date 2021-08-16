const ff = [1, 2, 3, ['a', 'b', 'c', [5, 6, 7, ['d', 'e', 'f']]]];

const flat = (xar) => {
  if (!Array.isArray(xar)) return;

  const ret = xar.reduce((prev, el) => {
    if (Array.isArray(el)) {
      prev.push(...flat(el));
      return prev;
    }
    prev.push(el);
    return prev;
  }, []);

  return ret;
};

console.log(flat(ff));
