//////////////////////////////////////////////////////////////////////////
///////MIN HEAP

class Heap {
  constructor() {
    this.arr = [];
  }

  swap(index1, index2) {
    [this.arr[index1], this.arr[index2]] = [this.arr[index2], this.arr[index1]];
  }

  insert(value) {
    this.arr.push(value);
    this.upHeap(this.arr.length - 1);
  }
  upHeap(index) {
    if (index == 0) return;

    let pI = this.getParent(index);

    if (this.arr[index] < this.arr[pI]) {
      this.swap(index, pI);
      this.upHeap(pI);
    }
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeft(index) {
    return index * 2 + 1;
  }
  getRight(index) {
    return index * 2 + 2;
  }
  remove() {
    if (this.arr.length == 0) return;
    if (this.arr.length == 1) return this.arr.pop();

    this.arr[0] = this.arr.pop();
    this.downHeap(0);
  }
  downHeap(index) {
    let min = index;
    let left = this.getLeft(index);
    let right = this.getRight(index);

    if (left < this.arr.length && this.arr[left] < this.arr[min]) {
      min = left;
    }

    if (right < this.arr.length && this.arr[right] < this.arr[min]) {
      min = right;
    }

    if (min !== index) {
      this.swap(min, index);
      this.downHeap(min);
    }
  }
}

// const heap = new Heap();
// heap.insert(4);
// heap.insert(2);
// heap.insert(6);
// heap.insert(9);
// heap.insert(1);
// heap.insert(10);
// heap.insert(18);
// heap.remove();
// console.log(heap.arr);

////////////////////////////////////////////////////////////////
////////MAX HEAP

class maxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.upHeap(this.heap.length - 1);
  }

  remove() {
    if (this.heap.length == 0) return;
    if (this.heap.length == 1) return this.heap.pop();

    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.downHeap(0);
    return maxValue;
  }

  downHeap(index) {
    let max = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < this.heap.length && this.heap[left] > this.heap[max]) {
      max = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[max]) {
      max = right;
    }
    if (max !== index) {
      this.swap(index, max);
      this.downHeap(max);
    }
  }

  upHeap(index) {
    if (index == 0) return;
    let pI = this.getParent(index);
    if (this.heap[index] > this.heap[pI]) {
      this.swap(index, pI);
      this.upHeap(pI);
    }
  }
  heapSort() {
    const data = [];
    while (this.heap.length) {
      data.push(this.remove());
    }
    return data;
  }
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  getParent(index) {
    return Math.floor((index - 1) / 2);
  }
}

const maxheap = new maxHeap();
maxheap.insert(2);
maxheap.insert(3);
maxheap.insert(7);
maxheap.insert(1);
maxheap.insert(6);
maxheap.insert(9);
maxheap.insert(8);
maxheap.remove();
