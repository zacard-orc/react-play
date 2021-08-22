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

console.log(n1);

function iv(xn) {
  if (xn.left && xn.right) {
    [xn.right, xn.left] = [xn.left, xn.right];
    iv(xn.left);
    iv(xn.right);
  }
  return xn;
}

const newXn = iv(n1);

console.log(newXn);
