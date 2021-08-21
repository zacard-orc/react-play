const reg5 = /<(title)>\w+<\/\1>/g;
console.log(reg5.test('<title>xxx</title>'));

const reg6 = /(\d{1,3})(.\1){3}/g;
console.log(reg6.test('223.5.5.5'));
