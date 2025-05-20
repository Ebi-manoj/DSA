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
const linkedlist = new Linkedlist();

linkedlist.addFirst(5);
linkedlist.addFirst(4);
linkedlist.addFirst(3);
linkedlist.addFirst(2);
linkedlist.addFirst(1);
linkedlist.print();
Linkedlist.prototype.getMiddle = getMiddle;
console.log(linkedlist.getMiddle());

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

const dl = new DoublyList();
dl.addFirst(5);
dl.addFirst(4);
dl.addFirst(3);
dl.addFirst(2);
dl.addFirst(1);

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
