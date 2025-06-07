# DATA STRUCTURES AND ALGORITHM

Steping into DSA Lets talk about what is DSA and why wee need that

## 🌱 What is Data Structure?

A data structure is a way to organize and store data in a computer so that we can use it efficiently.

🔧 Examples:
📦 Array: A list of items stored next to each other (e.g., [10, 20, 30]).

📚 Stack: Think of a pile of books — you can only take the top one first (LIFO - Last In First Out).

🎫 Queue: Like people in a line — first come, first serve (FIFO - First In First Out).

🌳 Tree: A structure like your family tree or folder structure.

🔗 Linked List: A chain of items connected one by one.

🗺️ Hash Table: Like a dictionary where you look up value using a key.

## 🤖 What is an Algorithm?

An algorithm is a step-by-step set of instructions to solve a problem or perform a task.

🧠 Example:
Imagine making tea:

Boil water

Add tea powder

Add sugar

Add milk

Strain and serve

This is an algorithm!

In coding:

Sorting numbers from small to big is done using sorting algorithms (e.g., Bubble Sort, Merge Sort).

Finding something in a list uses searching algorithms (e.g., Binary Search).

### 🤔 Why Do We Need Data Structures & Algorithms (DSA)?

✅ 1. Efficiency
Writing code is easy, but writing fast and efficient code is the key.

DSA helps us use memory and time wisely.

✅ 2. Problem Solving
DSA teaches you how to break down problems and solve them logically.

✅ 3. Job Interviews
All top tech companies like Google, Amazon, TCS, Infosys, etc., ask DSA questions in interviews.

✅ 4. Better Projects
If your app, game, or website deals with lots of data, you need the right data structure to manage it.

### 🎯 Simple Analogy

👜 Think of a data structure like a bag you use to carry things (data).
🚶‍♂️ An algorithm is the way you pack and take out items from the bag.

If you pack smart (use the right data structure) and work smart (use a good algorithm), you’ll solve problems faster and better.

---

## 📦 Memory Allocation & 🕳️ Memory Leak

Memory allocation refers to the process of assigning and deallocating memory in a computer system.
There are various memory allocation techniques, including stack-based allocation and dynamic allocation.

#### 📦 Why is Memory Allocation Important?

- 💾 Our computer has **limited RAM**.
- 🧠 We need to **store and manage data properly**.
- ⚡ Efficient memory allocation:
  - Prevents **wastage of memory**
  - Makes programs **faster** and more **stable**

#### 🕳️ What is a Memory Leak?

A **Memory Leak** happens when your program **allocates memory**, but **doesn’t release (free)** it when it’s no longer needed.

#### 💥 Result:

- 🚨 Your program keeps **using more memory** over time.
- 🐢 It can **slow down** or even **crash** the system if RAM runs out!

#### Stack-Based Allocation

Stack-based allocation is a common method used by programming languages to manage memory. It involves utilizing a region of memory called the stack, which automatically allocates and deallocates memory for variables within a limited scope. This approach is fast and efficient, making it suitable for managing small and short-lived data.

#### Dynamic Allocation

Dynamic allocation, on the other hand, allows for more flexible memory management. It involves allocating memory from a region called the heap, which is larger and can accommodate more significant amounts of data. Dynamic allocation is particularly useful when dealing with data structures that require varying amounts of memory or when handling large datasets.

#### Memory Leaks: Causes and Consequences

Memory leaks are a common issue in software development that can have detrimental effects on the performance and stability of an application. A memory leak occurs when allocated memory is not properly deallocated, resulting in memory being reserved but no longer accessible for other processes. Over time, memory leaks can lead to increased memory consumption and a gradual degradation of system performance.

## 📘 Complexity Analysis

**Complexity Analysis** is a method to evaluate how the performance of an algorithm or data structure scales with the size of the input. It primarily involves:

- **Time Complexity**: Measures the amount of time an algorithm takes to complete as a function of the input size.
- **Space Complexity**: Measures the amount of memory an algorithm uses relative to the input size.

These complexities are often expressed using **Big O notation**, which provides an upper bound on the growth rate of an algorithm's resource consumption.

### 🧮 Common Time Complexities in Big O Notation

| Big O Notation | Name              | Description                                                         |
| -------------- | ----------------- | ------------------------------------------------------------------- |
| O(1)           | Constant Time     | Execution time doesn't change with input size.                      |
| O(log n)       | Logarithmic Time  | Execution time increases logarithmically with input size.           |
| O(n)           | Linear Time       | Execution time increases linearly with input size.                  |
| O(n log n)     | Linearithmic Time | Execution time increases in proportion to n log n.                  |
| O(n²)          | Quadratic Time    | Execution time increases proportionally to the square of the input. |
| O(2ⁿ)          | Exponential Time  | Execution time doubles with each additional input element.          |
| O(n!)          | Factorial Time    | Execution time increases factorially with input size.               |

### 🗃️ Time and Space Complexities of Common Data Structures

### 1. Array

| Operation | Time Complexity |
| --------- | --------------- |
| Access    | O(1)            |
| Search    | O(n)            |
| Insertion | O(n)            |
| Deletion  | O(n)            |

- **Space Complexity**: O(n)

---

### 2. Stack

| Operation | Time Complexity |
| --------- | --------------- |
| Push      | O(1)            |
| Pop       | O(1)            |
| Peek      | O(1)            |

- **Space Complexity**: O(n)

---

### 3. Queue

| Operation | Time Complexity |
| --------- | --------------- |
| Enqueue   | O(1)            |
| Dequeue   | O(1)            |
| Peek      | O(1)            |

- **Space Complexity**: O(n)

---

### 4. Singly Linked List

| Operation | Time Complexity |
| --------- | --------------- |
| Access    | O(n)            |
| Search    | O(n)            |
| Insertion | O(1)            |
| Deletion  | O(1)            |

- **Space Complexity**: O(n)

---

### 5. Doubly Linked List

| Operation | Time Complexity |
| --------- | --------------- |
| Access    | O(n)            |
| Search    | O(n)            |
| Insertion | O(1)            |
| Deletion  | O(1)            |

- **Space Complexity**: O(n)

---

### 6. Hash Table

| Operation | Average Time | Worst Case Time |
| --------- | ------------ | --------------- |
| Search    | O(1)         | O(n)            |
| Insertion | O(1)         | O(n)            |
| Deletion  | O(1)         | O(n)            |

- **Space Complexity**: O(n)

---

### 7. Binary Search Tree (BST)

| Operation | Average Time | Worst Case Time |
| --------- | ------------ | --------------- |
| Search    | O(log n)     | O(n)            |
| Insertion | O(log n)     | O(n)            |
| Deletion  | O(log n)     | O(n)            |

- **Space Complexity**: O(n)

---

### 8. Balanced BST (e.g., AVL, Red-Black Tree)

| Operation | Time Complexity |
| --------- | --------------- |
| Search    | O(log n)        |
| Insertion | O(log n)        |
| Deletion  | O(log n)        |

- **Space Complexity**: O(n)

---

### 9. Heap

| Operation      | Time Complexity |
| -------------- | --------------- |
| Insert         | O(log n)        |
| Delete Min/Max | O(log n)        |
| Peek Min/Max   | O(1)            |

- **Space Complexity**: O(n)

---

### 10. Trie (Prefix Tree)

| Operation | Time Complexity |
| --------- | --------------- |
| Search    | O(m)            |
| Insertion | O(m)            |
| Deletion  | O(m)            |

- **Space Complexity**: O(n \* m)

> Where **n** is the number of keys and **m** is the length of the key.

## Stack vs Heap Memory

### 📦 1. Stack Memory – Fast and Organized

✅ Used for:

- Function calls
- Local variables (like numbers, booleans, temporary values)
- Keeps track of "who called whom" in a program

🧱 Structure:

- LIFO (Last In, First Out) — like a stack of plates 🍽️
- Memory is managed automatically — when a function ends, its stack memory is cleared.

⚡ Example:

```js
function add(a, b) {
  let result = a + b; // result is stored in stack
  return result;
}
```

🔁 What happens:
When add() is called, a stack frame is created for it.

Inside it, a, b, and result are stored.

After return, memory is cleared.

### 🧳 2. Heap Memory – Flexible and Dynamic

✅ Used for:
Objects, arrays, or anything created dynamically (new Object(), or in JS: {}, [])

Memory that needs to persist beyond function calls

🧱 Structure:
No order like LIFO

Memory is allocated and freed manually (in C/C++) or via garbage collection (in JS, Java, etc.)

⚡ Example in JavaScript:

```js
function createUser() {
  let user = { name: 'Ebi' }; // stored in heap
  return user;
}
```

🔁 What happens:
The { name: "Ebi" } object is stored in the heap.

- The user variable in the stack holds a reference (a pointer) to the heap.

---

---

### 🧠 What is XOR?

**XOR** stands for **Exclusive OR**. It is a bitwise operator that compares two bits and returns:

- `1` if the bits are **different**
- `0` if the bits are **same**

#### XOR Truth Table:

| A   | B   | A ⊕ B |
| --- | --- | ----- |
| 0   | 0   | 0     |
| 0   | 1   | 1     |
| 1   | 0   | 1     |
| 1   | 1   | 0     |

#### ✅ XOR Properties (Very Useful in Coding)

| Property               | Meaning                          |
| ---------------------- | -------------------------------- |
| `a ^ 0 = a`            | XOR with 0 gives the same number |
| `a ^ a = 0`            | XOR with itself gives 0          |
| `a ^ b ^ a = b`        | Same values cancel out           |
| XOR is **commutative** | `a ^ b = b ^ a`                  |
| XOR is **associative** | `(a ^ b) ^ c = a ^ (b ^ c)`      |

---

---

## TREE DATA STRUCTURES 🌳

What is Tree?

A tree in DSA (Data Structures and Algorithms) is a way to organize data. It looks like an upside-down tree with a root at the top and branches spreading out. Each point on the tree is called a node, and the lines connecting them are called edges. The top node is the root, and nodes with no children are called leaves.

### Types of Trees in Data Structure

#### 1) Binary Tree

A binary tree is a tree data structure where each node has at most two children, referred to as the left child and the right child.

#### 2) Binary Search Tree

A binary search tree is a binary tree where each node has a value, and the left child's value is less than the parent's value, while the right child's value is greater than the parent's value.

#### 3) AVL Tree

An AVL tree is a self-balancing binary search tree where the difference in heights between the left and right subtrees of any node is at most one.

#### 4) Red Black Tree

A red-black tree is a self-balancing binary search tree where each node contains an extra bit for color (red or black) to ensure the tree remains balanced.

#### 5) Heap

A heap is a special tree-based data structure that satisfies the heap property: in a max-heap, each parent node is greater than or equal to its children; in a min-heap, each parent node is less than or equal to its children.

#### 6) B-Tree

A B-tree is a self-balancing search tree in which nodes can have multiple children. It is commonly used in databases and file systems.

#### 7) Segment Tree

A segment tree is a binary tree used for storing intervals or segments. It allows querying which segments contain a given point.
