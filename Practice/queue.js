class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    this.queue.push(data);
  }
  dequeue() {
    if (this.isEmpty()) return 'Queue is empty';
    this.queue.shift();
  }
  front() {
    if (this.isEmpty()) return 'Queue is empty';
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length == 0;
  }
  print() {
    if (this.isEmpty()) return 'Queue is empty';
    console.log(...this.queue);
  }
}

const queue = new Queue();

//////////////////////////////////////////////////////////////////////////////
///IMPLEMENT QUEUE USING STACKS

function queueUsingStacks() {
  function queue() {
    this.stack1 = [];
    this.stack2 = [];
  }
  queue.prototype.enqueue = function (x) {
    this.stack1.push(x);
  };
  queue.prototype.dequeue = function () {
    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  };

  queue.prototype.front = function () {
    if (this.stack2.length == 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  };

  const q = new queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.dequeue();
  q.dequeue();
  console.log(q.front());
}
queueUsingStacks();
