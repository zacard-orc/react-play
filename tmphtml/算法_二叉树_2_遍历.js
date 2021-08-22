class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const n1 = new Node(10);
const n2 = new Node(8);
n1.left = n2;
const n3 = new Node(13);
n1.right = n3;
const n4 = new Node(4);
n2.left = n4;
const n5 = new Node(5);
n2.right = n5;
const n6 = new Node(11);
n3.left = n6;
const n7 = new Node(20);
n3.right = n7;

const printLineB = []; //before
const printLineC = []; //center
const printLineA = []; //after

function iv(xn) {
  // 前序遍历，进来就挖
  printLineB.push(xn.value);

  if (xn.left) {
    iv(xn.left);
  }

  // 中序遍历，左边挖到最深，再右边挖到最深
  printLineC.push(xn.value);

  if (xn.right) {
    iv(xn.right);
  }

  // 后序遍历，右边挖到最深
  printLineA.push(xn.value);
}

iv(n1);

console.log('前序', printLineB.join(', '));
console.log('中序', printLineC.join(', '));
console.log('后序', printLineA.join(', '));
