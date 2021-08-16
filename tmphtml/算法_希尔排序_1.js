const shell = (arr) => {
  console.log('arr len', arr.length);
  // gap = subgroup len
  let len = arr.length;
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    console.log('==>', gap);
    for (let i = gap; i < len; i++) {
      let j = i;
      let current = arr[i];
      // j 是靠右（靠后的）
      // j-gap 是靠左，对面的那个
      console.log(i, current);
      while (j - gap >= 0 && current < arr[j - gap]) {
        console.log('loop=>', arr[j - gap]);
        arr[j] = arr[j - gap];
        j = j - gap;
        console.log('new j => ', j);
      }
      arr[j] = current;
    }
  }

  return arr;
};

const xa = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37];
console.log(shell(xa));
