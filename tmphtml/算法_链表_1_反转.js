class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const n1 = new Node(10);
const n2 = new Node(8);
n1.next = n2;
const n3 = new Node(13);
n2.next = n3;
const n4 = new Node(4);
n3.next = n4;
const n5 = new Node(5);
n4.next = n5;
const n6 = new Node(11);
n5.next = n6;
const n7 = new Node(20);
n6.next = n7;

/*
10,8,13,4,5,11,20
 */
function iv(xn) {
  var head = xn; // 挪到最前面后到对象
  var p = head; // 挪动对象到前面一个
  var q = null; // 就是挪动到对象

  while (p.next !== null) {
    // 1, 10,8,13,4,5,11,20
    q = p.next;
    console.log('p,', p.value);
    console.log('q,', q.value);

    p.next = q.next;
    if (q.next) {
      console.log('p => next', p.value, q.next.value);
    }
    /*
     1，
     挑出8，把10=》13。
     把8 =》10（newest head）
     把head =》 8
     8,10,13,4,5,11,20
     2,
     挑出13，把10=》4
     把13 =》8  （newest head）
     把head =》 13
     13,8,10,4,5,11,20

     */
    q.next = head;
    head = q;
  }
  return head;
}

function pv(xn) {
  while (xn.next) {
    console.log(xn.value);
    xn = xn.next;
  }
  console.log(xn.value);
}

// pv(n1);
const xn1 = iv(n1);
console.log('---');
// pv(xn1);
