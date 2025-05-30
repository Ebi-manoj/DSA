// create a linkedlist

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addLast(data) {
    const newNode = new Node(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      current = current.next;
      count++;
    }
    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) return;
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  removeHead() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeTail() {
    if (!this.head) return;
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) return;
    if (index === 0) {
      this.head = this.head.next;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }
  removeMiddle() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);

    let slow = this.head;
    let fast = this.head;
    let prev = null;
    while (fast && fast.next !== null) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = slow.next;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

//////////////////////////////////////////////////////////
//Reverse a linkedList
function reverseLinkedlist() {
  let prev = null;
  let current = this.head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

/////////////////////////////////////////
//Find middle of linkedlist
// [1,2,3,4,5,6]
function getMiddle() {
  let slow = this.head;
  let fast = this.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
Linkedlist.prototype.getMiddle = getMiddle;

function deleteNth(n) {
  let slow = this.head;
  let fast = this.head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (fast == null) {
    return (this.head = this.head.next);
  }
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  this.print();
  return this.head;
}
Linkedlist.prototype.deleteNth = deleteNth;

const linkedlist = new Linkedlist();

// linkedlist.addFirst(5);
// linkedlist.addFirst(4);
// linkedlist.addFirst(3);
// linkedlist.addFirst(2);
// linkedlist.addFirst(1);
// console.log(linkedlist.deleteNth(2));

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////DOUBLY LINKEDLIST////////////////////////////////////////

class DNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new DNode(data);
    newNode.prev = null;
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
  }

  addLast(data) {
    if (this.head === null) return this.addFirst(data);
    const newNode = new DNode(data);
    newNode.next = null;
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
    newNode.prev = lastNode;
  }

  findNode(node) {
    let current = this.head;
    while (current.next !== null) {
      if (current.data === node) return current;
      current = current.next;
    }
  }
  reverse() {
    if (!this.head) return;
    let temp = null;
    let current = this.head;
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }
    this.head = temp;
  }
  insertAfterNode(node, data) {
    const prevNode = this.findNode(node);
    if (prevNode.next === null) return this.addLast(data);
    const newNode = new DNode(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next.prev = newNode;
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  printReverse() {
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    while (last) {
      console.log(last.data);
      last = last.prev;
    }
  }
}

/////////////////////////////////////////////////
//  function of dll find two numbers that sum to
//  a target value from a sorted dll in a single iteration

// 1,2,3,4,5,6 t=6

function findTwo(target) {
  let start = this.head;
  let end = this.head;
  while (end.next !== null) {
    end = end.next;
  }

  while (start !== end) {
    let sum = 0;
    sum += start.data + end.data;
    if (sum === target) {
      return { start: start.data, end: end.data };
    }
    sum > target ? (end = end.prev) : (start = start.next);
  }
  return -1;
}

DoublyList.prototype.findTwo = findTwo;

// const dl = new DoublyList();
// dl.addFirst(5);
// dl.addFirst(4);
// dl.addFirst(3);
// dl.addFirst(2);
// dl.addFirst(1);

////////////////////////////////////////////////////////////////////////////
//////////////////CIRCULAR LINKEDLIST///////////////////////////////////////

class CNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class ClinkedList {
  constructor() {
    this.head = null;
  }

  insertEnd(data) {
    const newNode = new CNode(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }
    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = this.head;
  }
  print() {
    if (!this.head) return console.log('Empty list');
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

const CLL = new ClinkedList();
CLL.insertEnd(5);
CLL.insertEnd(6);
CLL.insertEnd(7);
CLL.insertEnd(8);
CLL.print();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LEETCODE QUESTIONS AND MY SOLUTIONS////////////////////////////////////////////////

/////////////////////////////////////
//LEETCODE 21 merge two sorted list
const mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return list1;
  const newNode = new ListNode(0);
  function add(list) {
    while (list !== null) {
      let current = newNode;
      while (current !== null) {
        if (current.next == null || current.next.val > list.val) {
          current = current;
          break;
        }
        current = current.next;
      }
      const addNode = new ListNode(list.val);
      addNode.next = current.next;
      current.next = addNode;
      list = list.next;
    }
  }
  add(list1);
  add(list2);
  return newNode.next;
};

///////////////////////////////////////////
//LEETCODE 141 Detect the cycle exists
const hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};

/////////////////////////////////////////////
//LEETCODE 876 Middle of the linkedlist
const middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

//////////////////////////////////////////////
//LEETCODE 83 remove duplicates
const deleteDuplicates = function (head) {
  if (!head) return head;
  let index = head;
  let current = head.next;
  while (current !== null) {
    if (current.val !== index.val) {
      index.next = current;
      index = index.next;
    }
    current = current.next;
  }
  index.next = null;
  return head;
};
