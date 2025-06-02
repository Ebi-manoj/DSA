class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }
  pop() {
    if (this.isEmpty()) return 'The stack is empty';
    this.stack.pop;
  }
  peek() {
    if (this.isEmpty()) return 'The stack is empty';
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  printStack() {
    if (this.isEmpty()) return 'The stack is empty';
    for (let i = 0; i < this.stack.length; i++) {
      console.log(this.stack[i]);
    }
  }
}

const stack = new Stack();
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.printStack();
