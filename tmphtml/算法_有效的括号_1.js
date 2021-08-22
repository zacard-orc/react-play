/*
有效的括号

给定一个只包括 ‘(’，’)’，’{’，’}’，’[’，’]’ 的字符串，判断字符串是否有效。
有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 */

const sam = '()[]{}';

function valid(xn) {
  const stack = [];
  const km = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let s of xn) {
    console.log(s);
    if (km[s]) {
      stack.push(km[s]);
    } else {
      if (s === stack.pop()) {
        continue;
      } else {
        return false;
      }
    }
  }

  return !stack.length;
}

const ret = valid(sam);
console.log(ret);
