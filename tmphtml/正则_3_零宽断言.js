// 某字符串 product 后面带有某个字符串

// 负向零宽，匹配为true，也就是前面带着xxx带情况下，该如何如何

const reg81 = /(?<=name:)(wangfei)/g;
console.log('reg81', reg81.test('name:wangfei')); // true
// 连带向后(右)匹配，找到为正，能找出wangfei【 站在常量字符串角度=》这个字符串前面有，则T】

const reg82 = /(?<!na3me:)(wangfei)/g;
console.log('reg82', reg82.test('name:wangfei')); // true
console.log('reg82', reg82.test('na3me:wangfei')); // false
