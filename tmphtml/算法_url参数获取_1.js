const qss = '_ijt=armsgn2bndklp1kh32laj13ajq&a=1&b=2&a=3%5';

const val = 'a';
const reg = new RegExp(`${val}=[\\w%_|-]+(&|$)`, 'g');
const ret = qss.matchAll(reg);

console.log(...ret);

Array.from(ret).map((el) => {
  console.log(el);
});
