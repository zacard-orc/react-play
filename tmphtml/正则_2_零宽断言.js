// 某字符串 product 后面带有某个字符串

// 正向零宽，匹配为true，也就是后面带着xxx带情况下，该如何如何
const reg71 = /(product)(?=_path)/g; // true
console.log('reg71', reg71.test('product_path'));

const reg72 = /(product)(?=_path)/g; // true
console.log('reg72', reg72.test('2product_path'));

let a = 'bbb123abccc';
const aret = a.match(/\d+(?=ab)/);

console.log(aret);

// 正向零宽，不匹配为true

const reg73 = /(product)(?!_min.css)/g; // 也就是不能包含min.css
console.log('reg73', reg73.test('product_path')); // true
console.log('reg73', reg73.test('product_min.css')); // false
