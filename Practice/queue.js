///////////////////////////////////////////////////////////////////////////////////////
///QUEUE
// queue in data structures is a linear collection of elements that operates under the First In,
// First Out (FIFO) principle. This means that the first element added to the queue will be the first one removed.

//TYPES OF QUEUE
// 1. Simple Queue
// A simple queue operates on the FIFO (First In, First Out) principle, where elements are added to the rear and
//  removed from the front. It is the most basic form of a queue used for sequential data processing.

// 2. Circular Queue
// A circular queue is a more efficient version of the simple queue. It uses a circular structure to utilize memory
// optimally. In a circular queue, when the rear reaches the end of the array and there is space at the beginning,
// it can wrap around and use this space, thus maximizing the use of available memory.

// 3. Priority Queue
// In a priority queue, elements are not necessarily dequeued in the order they were enqueued. Instead, each element is
// associated with a priority, and the element with the highest priority is dequeued first. Priority queues are often
// implemented using heaps to allow for efficient priority-based retrieval.

// 4. Double-Ended Queue (Deque)
// A deque allows insertion and removal of elements from both the front and the rear of the queue. This flexibility
// makes it a handy tool for various applications where elements need to be processed from both ends.

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
