//////////////////////////////////////////////////////////////////
/////BINARY TREE

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length) {
      let current = queue.shift();

      if (!current.left) {
        current.left = newNode;
        break;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        break;
      } else {
        queue.push(current.right);
      }
    }
  }

  display(node) {
    if (node == null) return;

    this.display(node.left);
    console.log(node.data);
    this.display(node.right);
  }
}

const tree = new Tree();
tree.insert(15);
tree.insert(6);
tree.insert(8);
tree.insert(5);
tree.insert(9);
tree.insert(7);
tree.insert(10);
// tree.display(tree.root);

///////////////////////////////////////////////////////////////////////////////////
////BINARY SEARCH TREE

class Bnode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root == null;
  }
  insert(data) {
    const newNode = new Bnode(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }
  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (!root.left) root.left = newNode;
      else this.insertNode(root.left, newNode);
    } else {
      if (!root.right) root.right = newNode;
      else this.insertNode(root.right, newNode);
    }
  }
  search(root, value) {
    if (!root) return false;
    if (root.data == value) return true;

    if (value < root.data) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }
  ////////////////////DFS TRAVERSAL///////////////////

  // PREORDER
  // 1) Read the node
  // 2) visit left
  // 3) visit right
  ////Mean all the left nodes starting from root will print first then reccursion goes for right trees

  preOrder(root) {
    if (!root) return;
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  //INORDER
  // 1) Visit the left
  // 2) Read the Node
  // 3) Visit right
  //// Means all the left nodes starting from left leaf(bottom-root) will print first then goes for right

  inOrder(root) {
    if (!root) return;
    this.inOrder(root.left);
    console.log(root.data);
    this.inOrder(root.right);
  }

  //POSTORDER
  //1) Visit the left
  //2) Visit the right
  ////Means it will be like printing the left leaf and right leave go back to parent execute all the calls
  postOrder(root) {
    if (!root) return;
    this.inOrder(root.left);
    this.inOrder(root.right);
    console.log(root.data);
  }
  ///////////////////////////////BFS TRAVERSAL//////////////////////
  //1) enqueue the root
  //2) Dequeue and read
  //3) push left and right

  levelOrder() {
    if (this.isEmpty()) return 'Empty';
    const queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      console.log(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  min(root) {
    if (!root.left) return root.data;
    return this.min(root.left);
  }
  max(root) {
    if (!root.right) return root.data;
    return this.max(root.right);
  }

  deleteNode(root, value) {
    if (!root) return null;

    if (value < root.data) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.data) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.right;
      } else {
        let minValue = this.min(root.right);
        root.value = minValue;
        root.right = this.deleteNode(root.right, minValue);
      }
    }
    return root;
  }
}

const bst = new BST();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(7);
console.log(bst.deleteNode(bst.root, 15));
bst.inOrder(bst.root);
