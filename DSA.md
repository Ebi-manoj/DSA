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

### 📦 Why is Memory Allocation Important?

- 💾 Our computer has **limited RAM**.
- 🧠 We need to **store and manage data properly**.
- ⚡ Efficient memory allocation:
  - Prevents **wastage of memory**
  - Makes programs **faster** and more **stable**

### 🕳️ What is a Memory Leak?

A **Memory Leak** happens when your program **allocates memory**, but **doesn’t release (free)** it when it’s no longer needed.

### 💥 Result:

- 🚨 Your program keeps **using more memory** over time.
- 🐢 It can **slow down** or even **crash** the system if RAM runs out!

---

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
