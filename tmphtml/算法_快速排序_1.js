function quick(arr) {
  if (!arr || arr.length < 2) return arr;
  const pv = arr.pop();
  const left = arr.filter((el) => el < pv);
  const right = arr.filter((el) => el >= pv);
  const mgr = [...quick(left), pv, ...quick(right)];
  return mgr;
}

const bb = [1, -30, 10, -1, 3, -5, 44];

const cc = quick(bb);

console.log(cc);
